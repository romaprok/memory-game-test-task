import React from "react";
import Card from "./Card";
import {useDispatch} from "react-redux";
import {showCard} from "../../../../dal/dataReducer";

const CardContainer = (props) => {

    const dispatch = useDispatch()

    const openCard = () => {
        dispatch(showCard(props.card))
    }
    return (
        <Card card={props.card} openCard={openCard}/>
    )
}
export default CardContainer
