import { useOutletContext } from "react-router"

export default function HostVansPhotos() {
    const van = useOutletContext()

    return(<img src={van?.imageUrl} alt="Van" style={{height: "15em"}}/>)

}