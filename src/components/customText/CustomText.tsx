import React from 'react'
import CSS from 'csstype'

export const CustomText: React.FC<Props> = ({
    style,
    text,
    mB,
    mT,
    mL,
    mR,
    onClick,
    weight,
    textAlign,
    lineHeight,
    size,
    color,
    children,
    id,
}) => {
    return (
        <p style={{
            fontSize: size ? size + 'px' : '16px',
            textAlign: textAlign ? textAlign : undefined,
            color: color ? color : 'black',
            marginBottom: mB ? mB + 'px' : 0,
            marginLeft: mL ? mL + 'px' : 0,
            marginTop: mT ? mT + 'px' : 0,
            marginRight: mR ? mR + 'px' : 0,
            lineHeight: lineHeight ? lineHeight + 'px' : '24px',
            fontFamily: 'Inter',
            fontWeight: weight ? weight : 400,
            ...style,
        }}
            id={id}
            onClick={onClick}
        >
            {text || children}
        </p>
    )
}


interface Props {
    style?: object;
    text?: string;
    weight?: number;
    mB?: number,
    mT?: number,
    mL?: number,
    mR?: number,
    font?: string,
    textAlign?: CSS.Property.TextAlign,
    lineHeight?: number,
    size?: number,
    color?: string,
    children?: string,
    onClick?: () => void,
    id?: string | undefined
}
