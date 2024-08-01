/* eslint-disable react/prop-types */
import { useState } from "react"
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"


export default function Profile(props) {
    const [followText, setFollowtext] = useState("Follow")
    
    function handleClick() {
        alert("Você agora esta seguindo!")
        setFollowtext("Following")
    }
    

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.nome} />
            <Title> 
                <span> {props.nome} </span>
                <button 
                    className={styles.followButton}
                    onClick={handleClick}>
                    {followText}
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection 
                className={styles.links}
                id="links-secton"
                data-test="some value"
                aria-label="social links"  
            >
                <LinkButton href={props.githubUrl} target="https://github.com/RuanHAPereira">GitHub</LinkButton>
                <LinkButton href={props.linkedinUrl} target="https://www.linkedin.com/in/ruan-henrique-484b401a3/">LinkedIn</LinkButton>
                <LinkButton href={props.instagramUrl} target="https://www.instagram.com/ruanh_pereira/">Instagram</LinkButton>
            </ProfileSection>
        </div>
    )
}