import type { RouteLocationRaw } from "vue-router";

export enum Size {
    xs,
    sm,
    md,
    lg,
    xl
}

export enum Color {
    primary,
    red,
    yellow,
    gray,
    light
}

export enum Radius {
    circle,
    round
}

export type ISize = keyof typeof Size;
export type IColor = keyof typeof Color;
export type IRadius = keyof typeof Radius;

export interface ButtonProps {
    to?: RouteLocationRaw;
    type?: 'button' | 'reset' | 'submit';
    size?: ISize;
    variant?: IColor;
    custom?: boolean;
    disabled?: boolean;
    left?: boolean;
    loading?: boolean;
    radiusType?: Radius;
}
