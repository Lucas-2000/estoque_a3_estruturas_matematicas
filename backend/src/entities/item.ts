export class Item {
  sku: string;
  lot: string;
  name: string;
  price: number;
  weight: number;

  constructor() {
    if (!this.sku) {
      this.sku = this.generateSku();
    }

    if (!this.lot) {
      this.lot = this.generateLot();
    }
  }

  private generateSku(): string {
    const numbers = "0123456789";
    const letters = "abcdefghijklmnopqrstuvwxys";
    let result = "";

    while (result.length < 3) {
      let randomIndex = Math.floor(Math.random() * numbers.length);
      result += numbers.charAt(randomIndex);
    }

    while (result.length < 8) {
      let randomIndex = Math.floor(Math.random() * letters.length);
      result += letters.charAt(randomIndex).toUpperCase();
    }

    const now = new Date();
    const hour = ("0" + now.getHours()).slice(-2);
    const minute = ("0" + now.getMinutes()).slice(-2);
    const day = now.getDay();
    const month = now.getDate();
    const year = now.getFullYear();

    result += hour + minute + day + month + year;

    return result;
  }

  private generateLot(): string {
    let result = "LOT";

    const now = new Date();
    const hour = ("0" + now.getHours()).slice(-2);
    const minute = ("0" + now.getMinutes()).slice(-2);
    const day = now.getDay();
    const month = now.getDate();
    const year = now.getFullYear();

    result += hour + minute + day + month + year;

    return result;
  }
}
