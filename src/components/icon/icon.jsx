import { zodiacSigns } from "../../constants/zodiac_signs"

export default function Icon(props) {
    const icon = props.type ?? zodiacSigns.aquarius;
    const width = `${props.width ?? 40} px`;
    const height = `${props.height ?? 40} px`;
    return (
        <img src={icon.icon} alt={icon.description} width={width} height={height} />
    );
}