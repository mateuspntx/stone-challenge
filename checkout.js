function Checkout(items, emails) {
  if (!items || !items.length) {
    throw new Error('Must have "items" object with no empty space');
  }

  if (!emails || !emails.length) {
    throw new Error('Must have "emails" object with no empty space');
  }

  const resultsMap = new Map();

  emails = emails.filter((email) => Object.values(email) != '');

  const multiplyValues = items.reduce((acc, curr) => {
    return acc + curr.unit_price * curr.quantity;
  }, 0);

  let getTotal = ~~(multiplyValues / emails.length);

  const getRest = multiplyValues % emails.length;

  const getResults = () => {
    emails.map((email, i) => {
      if (i === emails.length - getRest) {
        getTotal = getTotal + 1;

        resultsMap.set(email, getTotal);
      } else {
        resultsMap.set(email, getTotal);
      }
    });

    return resultsMap;
  };

  return getResults();
}

module.exports = Checkout;
