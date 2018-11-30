const fs = require('fs');
const path = require('path');
const installHooks = () => {
  const hooks = [
      'post-checkout',
      // 'post-merge'
  ];
  for (const hook in hooks) {
    const src = path.resolve(`.githooks/${hooks[hook]}`);
    const dest = path.resolve(`.git/hooks/${hooks[hook]}`);
    if (fs.existsSync(dest)) {
      console.log(`${hooks[hook]} exists`);
      continue;
    }
    try {
      fs.copyFileSync(src, dest);
      console.log(`${hooks[hook]} hook copied`);
      fs.access(dest, fs.constants.X_OK, function(err) {
        err && fs.chmodSync(dest, 0755);
      });
      console.log(`${hooks[hook]} hook installed.`)
      return 0;
    } catch (err) {
      console.error(`error installing ${hooks[hook]} hook`);
      console.error(err);
    }
  }
}
installHooks();