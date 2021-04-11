/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = [];
  for (let i = 0; i < domains.length; i++) {
    const dom = domains[i].split('.');
    res.push(`.${dom[dom.length - 1]}`);
    res.push(`.${dom[dom.length - 1]}.${dom[dom.length - 2]}`);
    res.push(`.${dom[dom.length - 1]}.${dom[dom.length - 2]}.${dom[dom.length - 3]}`);
  }
  res = res.filter((s) => !s.match(/.undefined/));
  const ress = {};
  res.forEach((el) => {
    if (!ress[el]) {
      ress[el] = 1;
    } else {
      ress[el] += 1;
    }
  });
  return ress;
}
module.exports = getDNSStats;
