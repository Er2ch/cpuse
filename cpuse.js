class CPUse {
constructor(){
this.os = require('os')
}
usage = async cb => {
const sleep = () => new Promise(r => setTimeout(r,500))
let f = this.getCPUtimes(), s, t, d, usages = []
await sleep()
s = this.getCPUtimes()
await sleep()
t = this.getCPUtimes()
d = [f, s, t]
for(let i=0;i<f.length;i++) {
let fi = f[i].idle||0, ft = this.total(f[i]), si = s[i].idle||0, st = this.total(s[i]), ti = t[i].idle||0, tt = this.total(t[i]),
fu = 1-(si-fi)/(st-ft), su = 1-(ti-si)/(tt-st),
pu = (fu+su)/2*100
usages.push(pu.toFixed(1))}
if(cb && typeof cb == 'function') {return cb(usages)}
else return new Promise(r => r(usages))
}
getCPUtimes = () => this.os.cpus().map(i => i.times)
total = data => Object.values(data).reduce((a, b)=>a+b)
}
module.exports = new CPUse()