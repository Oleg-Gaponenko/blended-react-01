type Currency = "USD" | "EUR" | "UAH";

function convertCurrency({amount, currency}: {amount: number; currency:Currency}): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({amount: 5, currency: 'EUR'});