import {useEffect, useState} from "react";
import * as S from "./styles";
import {NavLink} from "react-router-dom";
import {BookLogo} from "../../assets";
import jsonData from '../../mock/index.json';
import {DataType} from "../../common/types";
import Header from "../../components/Header";

export default function Home() {
    const loadData: DataType[] = jsonData.book.content;

    return (
        <>
            <Header></Header>

            <S.PageTitle>Оглавление</S.PageTitle>

            <S.Container>
                <S.Ul>
                    {
                        loadData.map(((data, index) =>
                                <NavLink key={index} to={`/content/${data.id}`}>
                                    <S.Li>
                                        <p>{data.name}</p>
                                    </S.Li>
                                </NavLink>
                        ))
                    }
                </S.Ul>
            </S.Container>

        </>
    );
}
