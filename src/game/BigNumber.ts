import { Util } from "@/Util";

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
      } else if (typeof arguments[0] == "object") {
        this.Mantissa = arguments[0].Mantissa;
        this.Exponent = arguments[0].Exponent;
      }
    }

    this.Check();
  }

  get ValueFloat() {
    return this.ToFloat();
  }

  Add(num: BigNumber | number) {
    return BigNumber.Add(this, num);
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

  ToReadableString(type: string = "") {
    // console.log(this);
    return this.ToString();
  }

  ToString() {
    // this.Check();

    if (this.Exponent < 3) return (this.Mantissa * Math.pow(10, this.Exponent)).toFixed(2);
    return this.Mantissa.toFixed(2) + "e" + this.Exponent.toString();
  }
  ToStringPercent() {
    // this.Check();

    if (this.Exponent >= 3 || this.Exponent + 2 >= 3) return this.Mantissa.toFixed(2) + "e" + (this.Exponent + 2) + "%";
    // console.log("less than 3", this.Mantissa * Math.pow(10, this.Exponent) * 100, this.Exponent);
    return (this.Mantissa * Math.pow(10, this.Exponent) * 100).toFixed(2) + "%";
  }

  ToFloat() {
    const value = this.Mantissa * Math.pow(10, this.Exponent);
    return value >= 3.4028234663852886e38 ? 3.4028234663852886e38 : value;
  }

  Negative() {
    return new BigNumber(-this.Mantissa, this.Exponent);
  }

  ToDouble() {
    return this.ToFloat();
  }
  Sqrt() {
    let Exponent = this.Exponent / 2;
    return new BigNumber(
      this.Exponent - Exponent * 2 != 1 ? (this.Exponent - Exponent * 2 != -1 ? Math.sqrt(this.Mantissa) : Math.sqrt(this.Mantissa / 10.0)) : Math.sqrt(this.Mantissa * 10.0),
      Exponent
    );
  }

  Log10() {
    if (this.Mantissa != 0.0) return this.Exponent + Math.log10(this.Mantissa);

    return 0.0;
  }
  ToInt() {
    const value = this.Mantissa * Math.pow(10, this.Exponent);
    return value == Infinity ? Number.MAX_VALUE : Math.floor(value);
  }
  Pow(x: number): BigNumber {
    if (x % 1 === 0) return this.PowInt(x);
    if (x < 0.0) return BigNumber.Division(new BigNumber(1), this.Pow(-x));

    let y1 = x % 1.0; // reminder
    let bigNumber2 = new BigNumber(this.Mantissa, this.Exponent).PowInt(Math.floor(x));
    let num = this.Exponent * y1;
    let y2 = num % 1.0;
    bigNumber2.Exponent += Math.ceil(num);
    bigNumber2.Mantissa *= Math.pow(this.Mantissa, y1);
    bigNumber2.Mantissa *= Math.pow(10.0, y2);
    // console.log("float");
    // console.log("x", x);
    // console.log("bigNumber2:", bigNumber2);
    // console.log("num = this.Exponent * y1:", num);
    // console.log("y1 = x % 1.0:", y1);
    // console.log("y2 = num % 1.0:", y2);
    // console.log("bigNumber2.Exponent += Math.ceil(num):", (bigNumber2.Exponent += Math.ceil(num)));
    // console.log("bigNumber2.Mantissa *= Math.pow(this.Mantissa, y1)", Math.pow(this.Mantissa, y1));
    // console.log("bigNumber2.Mantissa *= Math.pow(10.0, y2):", Math.pow(10.0, y2));
    // console.log("final", bigNumber2);
    return bigNumber2;
  }

  PowInt(x: number) {
    let bigNumber1 = new BigNumber(this.Mantissa, this.Exponent);
    let bigNumber2 = new BigNumber(1.0);

    if (x % 1 === 0) {
      while (x > 0) {
        if (x % 2 == 0) {
          bigNumber1 = BigNumber.Multiplication(bigNumber1, bigNumber1);

          x /= 2;
        } else {
          bigNumber2 = BigNumber.Multiplication(bigNumber2, bigNumber1);
          --x;
        }
      }
      return bigNumber2;
    }
  }
  Log_a(a: number) {
    return this.Exponent * Math.log10(a) + Util.getBaseLog(this.Mantissa, a);
  }

  Abs() {
    return new BigNumber(Math.abs(this.Mantissa), this.Exponent);
  }

  Ln() {
    return this.Exponent * Math.log(10.0) + Math.log(this.Mantissa);
  }

  public static Add(num1: BigNumber | number, num2: BigNumber | number) {
    if (typeof num1 == "number") num1 = new BigNumber(num1);
    if (typeof num2 == "number") num2 = new BigNumber(num2);
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

  public static Multiplication(num1: BigNumber | number, num2: BigNumber | number) {
    if (typeof num1 == "number") num1 = new BigNumber(num1);
    if (typeof num2 == "number") num2 = new BigNumber(num2);
    return new BigNumber(num1.Mantissa * num2.Mantissa, num1.Exponent + num2.Exponent);
  }

  public static Division(num1: BigNumber | number, num2: BigNumber | number) {
    if (typeof num1 == "number") num1 = new BigNumber(num1);
    if (typeof num2 == "number") num2 = new BigNumber(num2);
    return new BigNumber(num1.Mantissa / num2.Mantissa, num1.Exponent - num2.Exponent);
  }

  public static IsEqual(num1: BigNumber | number, num2: BigNumber | number) {
    if (typeof num1 == "number") num1 = new BigNumber(num1);
    if (typeof num2 == "number") num2 = new BigNumber(num2);
    return Math.abs(num1.Mantissa - num2.Mantissa) < 1e-14 && num1.Exponent == num2.Exponent;
  }
  public static Subtract(num1: BigNumber | number, num2: BigNumber | number) {
    if (typeof num1 == "number") num1 = new BigNumber(num1);
    if (typeof num2 == "number") num2 = new BigNumber(num2);

    if (num1.Exponent == num2.Exponent && Math.abs(num1.Mantissa - num2.Mantissa) < 1e-13) return new BigNumber(0.0);
    num2.Mantissa = -num2.Mantissa;
    return BigNumber.Add(num1, num2);
  }

  public static BiggerOrEqualThan(num1: BigNumber | number, num2: BigNumber | number) {
    if (typeof num1 == "number") num1 = new BigNumber(num1);
    if (typeof num2 == "number") num2 = new BigNumber(num2);
    if (num1.Mantissa == 0.0) return 0.0 > num2.Mantissa;
    if (num2.Mantissa == 0.0) return num1.Mantissa > 0.0;

    return (
      (num1.Mantissa >= 0.0 && num2.Mantissa < 0.0) ||
      ((num1.Mantissa > 0.0 || num2.Mantissa <= 0.0) && (num1.Exponent >= num2.Exponent || (num1.Exponent >= num2.Exponent && num1.Mantissa > num2.Mantissa)))
    );
  }

  public static Sign(n: BigNumber) {
    return Math.sign(n.Mantissa);
  }
}
