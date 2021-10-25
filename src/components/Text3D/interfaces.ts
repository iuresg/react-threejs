export interface TextProps {
    text: string,
    color:string,
    textAling?:string,
    anchorX?: number | "center" | "left" | "right" | undefined;
    anchorY?: number | "bottom" | "top" | "middle" | "top-baseline" | "bottom-baseline" | undefined;
    fontSize:number,
    position?: number[],
}