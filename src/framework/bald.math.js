/* bald framework *\ \* math module */

export default class {

    // CONSTANTS

    static get FACTOR_SINGLE() { return 1 };
    static get FACTOR_DOUBLE() { return 2 };
    static get FACTOR_TRIPLE() { return 3 };
    static get FACTOR_QUADRUPLE() { return 4 };
    static get FACTOR_QUINTUPLE() { return 5 };
    static get FACTOR_SEXTUPLE() { return 6 };
    static get FACTOR_SEPTUPLE() { return 7 };
    static get FACTOR_OCTUPLE() { return 8 };
    static get FACTOR_NONUPLE() { return 9 };
    static get FACTOR_DECUPLE() { return 10 };
    static get FACTOR_CENTUPLE() { return this.FACTOR_DECUPLE * this.FACTOR_DECUPLE };
    static get FACTOR_MILLIDRUPLE() { return this.FACTOR_CENTUPLE * this.FACTOR_DECUPLE };
    static get FACTOR_MEGADRUPLE() { return this.FACTOR_MILLIDRUPLE * this.FACTOR_MILLIDRUPLE };
    static get FACTOR_GIGADRUPLE() { return this.FACTOR_MEGADRUPLE * this.FACTOR_MILLIDRUPLE };

    static get FRACTION_HALF() { return 1 / 2 };
    static get FRACTION_THIRD() { return 1 / 3 };
    static get FRACTION_FOURTH() { return 1 / 4 };
    static get FRACTION_FIFTH() { return 1 / 5 };
    static get FRACTION_SIXTH() { return 1 / 6 };
    static get FRACTION_SEVENTH() { return 1 / 7 };
    static get FRACTION_EIGTH() { return 1 / 8 };
    static get FRACTION_NINTH() { return 1 / 9 };
    static get FRACTION_TENTH() { return 0.1 };
    static get FRACTION_HUNDREDTH() { return 0.01 };
    static get FRACTION_THOUSANDTH() { return 0.001 };

    static get VALUE_E() { return 2.718281828459045 };
    static get VALUE_LOG10E() { return 0.4342944819032518 };
    static get VALUE_PI() { return 3.141592653589793 };
    static get VALUE_PIDIV2() { return this.PI / this.D2 };
    static get VALUE_PIDIV4() { return this.PI / this.D4 };
    static get VALUE_1DIVPI() { return this.D1 / this.PI };
    static get VALUE_2DIVPI() { return this.D2 / this.PI };
    static get VALUE_2SQRTPI() { return this.D2 / this.sqrt(this.PI) };
    static get VALUE_SQRT2() { return this.sqrt(D2) };
    static get VALUE_1DIVSQRT2() { return this.D1 / this.VALUE_SQRT2 };
    static get VALUE_PHI() { return 1.618033988749894 };
    static get VALUE_EPSILON() { return 2.7755575615628914e-17 };

    // FUNCTIONS

    static getRandom(max) {
        "use strict";
        if (!max) {
            max = 99999;
        }
        return window.Math.floor(window.Math.random() * max) + 1;
    }

}