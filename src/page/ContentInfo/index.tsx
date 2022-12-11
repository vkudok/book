import jsonData from '../../mock/index.json';
import {DataType} from "../../common/types";
import {NavLink, useLocation} from "react-router-dom"
import {BookLogo} from "../../assets";
import * as S from "../ContentInfo/styles";
import {useEffect, useState} from "react";
import { parse } from 'dom-parser-react';
import React from 'react'
import {PageLink} from "../ContentInfo/styles";
import Header from "../../components/Header";


export default function ContentInfo() {

    const [content, setContent] = useState<DataType>();
    const [description, setDescription] = useState<any>();
    const href = useLocation();
    const contentId = Number(href.pathname.split('/')[2]);

    useEffect(() => {
        const loadData: DataType[] = jsonData.book.content;
        for(let item of loadData){
            if(item.id === contentId){
                setContent(item);
                let imagesLength = item.description.images.length;
                let descNew = item.description.text;
                for(let i = 0; i < imagesLength; i++){
                    let imageLink = item.description.images[i].link;
                    let replacement = `<br><br><img style="background-color: white" src="${imageLink}"/><br><br>`;
                    descNew = descNew.replace(new RegExp(`<IMG id='${i}'>`, 'g'), replacement);
                }
                setDescription(parse(descNew,{
                    createElement: React.createElement,
                    Fragment: React.Fragment,
                }));
            }
        }
    }, [])

    return (
        <>
            <Header></Header>

            <S.PageTitle>{content?.name}</S.PageTitle>

            <S.Container>
                <S.Description>
                    {description}
                </S.Description>
                <S.PageLink href={content?.links}>Подробнее на Wikipedia</S.PageLink>
            </S.Container>


        </>
    );
}
