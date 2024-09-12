// Obs: "./" refere-se sempre a pasta atual em que estou
import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosDaHomePage = {
        //backgroundColor: "red"
    };

    // console.log(config.playlists);

    return (
        <>
            <CSSReset></CSSReset>
            <div style={estilosDaHomePage}>

                <Menu></Menu>
                <Header></Header>
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>

            </div>
        </>

    );
}

export default HomePage;

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
            margin-top: 50px;
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px;
        }

`;

function Header() {
    return (
        <StyledHeader>

            <section className="user-info">

                {/* <img src="banner" /> */}
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>


            </section>
        </StyledHeader>
    )
}

// Props é basicamente uma forma de passar parâmetros de um componente para outro

function Timeline(props) {
    // console.log("Dentro do componente", props.playlists);
    const playlistNames = Object.keys(props.playlists);

    // Statement (loop 'for' tradicional)
    // Retorno por expressão (react) 
    // Vai ser map o tempo todo no React
    return (
        <StyledTimeline>
            {/* Para cada playlist liste os vídeos */}
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);

                // Para cada vídeo da playlist imprima o nome do vídeo
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}