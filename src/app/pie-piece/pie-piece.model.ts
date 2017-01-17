export class PiePiece {
    constructor(
        public extRadius: number,
        public intRadius: number,
        public startAngle: number,
        public finishAngle: number,
        public color: string
    ) {}

    isValid(): boolean {
        return this.areRadiusesValid() && this.areAnglesValid();
    }

    private areRadiusesValid(): boolean {
        if (this.extRadius > this.intRadius && this.intRadius >= 0) {
            return true;
        }
        return false;
    }

    private areAnglesValid(): boolean {
        if (
            this.finishAngle > this.startAngle &&
            this.startAngle >= 0 &&
            this.startAngle <= Math.PI * 2 &&
            this.finishAngle >= 0 &&
            this.finishAngle <= Math.PI * 2
        ) {
            return true;
        }
        return false;
    }
}
