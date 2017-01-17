/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PiePiece } from './pie-piece.model';

describe('PiePiece model', () => {
    let piePiece: PiePiece;

    it('should not be valid if inputs are invalid', () => {
        piePiece = new PiePiece(0, 0, 0, 0, '');
        expect(piePiece.isValid()).toBe(false);
        piePiece = new PiePiece(3, 10, 0, Math.PI * .5, '');
        expect(piePiece.isValid()).toBe(false);
        new PiePiece(3, -10, 0, Math.PI * .5, '');
        expect(piePiece.isValid()).toBe(false);
        new PiePiece(10, 0, -Math.PI * .5, 0, '');
        expect(piePiece.isValid()).toBe(false);
        new PiePiece(10, 0, Math.PI * .5, Math.PI * 3, '');
        expect(piePiece.isValid()).toBe(false);
        new PiePiece(10, 0, Math.PI * 3, Math.PI * 4, '');
        expect(piePiece.isValid()).toBe(false);
        new PiePiece(10, 0, Math.PI, Math.PI * .5, '');
        expect(piePiece.isValid()).toBe(false);
    });
});
