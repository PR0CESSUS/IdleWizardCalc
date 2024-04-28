export class BigNumber {
  Mantissa: number;
  Exponent: number;
  constructor(...args) {
    if (arguments.length == 2) {
      this.Mantissa = arguments[0];
      this.Exponent = arguments[1];
    } else {
      if (typeof arguments[0] == "string") {
        let str = arguments[0] as string;
        let strArray = str.split("e");
        this.Mantissa = parseFloat(strArray[0]);
        if (strArray[1]) {
          this.Exponent = parseInt(strArray[1]);
        } else {
          this.Exponent = 0;
        }
      } else if (typeof arguments[0] == "number") {
        this.Mantissa = arguments[0];
        this.Exponent = 0;
      }
    }

    this.Check();
  }

  Check() {
    if (this.Mantissa == 0.0) {
      this.Exponent = 0;
    } else {
      while (Math.abs(this.Mantissa) < 1.0) {
        this.Mantissa *= 10.0;
        --this.Exponent;
      }
      while (Math.abs(this.Mantissa) >= 10.0) {
        this.Mantissa /= 10.0;
        ++this.Exponent;
      }
    }
  }

  ToReadableString() {
    return "string";
  }

  ToString() {
    // this.Check();
    if (this.Exponent < 3) return (this.Mantissa * Math.pow(10, this.Exponent)).toFixed(2);
    return this.Mantissa.toFixed(2) + "e" + this.Exponent.toString();
  }

  public static Add(num1: BigNumber, num2: BigNumber) {
    if (num1.Exponent == num2.Exponent && (Math.sign(num1.Mantissa) < 0 || Math.sign(num2.Mantissa) < 0) && Math.abs(num1.Mantissa + num2.Mantissa) < 1e-13)
      return new BigNumber(0, 1);
    if (Math.abs(Math.abs(num1.Exponent - num2.Exponent)) > 14) return num1.Exponent > num2.Exponent ? num1 : num2;
    let mantissa1;
    let mantissa2;
    let exponent;
    if (num1.Exponent > num2.Exponent) {
      mantissa1 = num2.Mantissa;
      let num = num1.Exponent - num2.Exponent;
      mantissa2 = num1.Mantissa;
      exponent = num1.Exponent;
      for (; num > 0; --num) mantissa1 /= 10.0;
    } else if (num2.Exponent > num1.Exponent) {
      mantissa1 = num1.Mantissa;
      let num = num2.Exponent - num1.Exponent;
      mantissa2 = num2.Mantissa;
      exponent = num2.Exponent;
      for (; num > 0; --num) mantissa1 /= 10.0;
    } else {
      mantissa1 = num1.Mantissa;
      exponent = num1.Exponent;
      mantissa2 = num2.Mantissa;
    }
    return new BigNumber(mantissa1 + mantissa2, exponent);
  }

  public static Multiplication(num1: BigNumber, num2: BigNumber) {
    return new BigNumber(num1.Mantissa * num2.Mantissa, num1.Exponent + num2.Exponent);
  }

  public static IsEqual(num1: BigNumber, num2: BigNumber) {
    return Math.abs(num1.Mantissa - num2.Mantissa) < 1e-14 && num1.Exponent == num2.Exponent;
  }
  public static Subtract(num1: BigNumber, num2: BigNumber) {
    if (num1.Exponent == num2.Exponent && Math.abs(num1.Mantissa - num2.Mantissa) < 1e-13) return new BigNumber(0.0);
    num2.Mantissa = -num2.Mantissa;
    return BigNumber.Add(num1, num2);
  }
}
