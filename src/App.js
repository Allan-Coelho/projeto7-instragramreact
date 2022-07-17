//import { render } from "react-dom";
import Stories from "./Stories";
import User from "./User";
import Post from "./Post";
import FollowerSuggestion from "./FollowerSuggestion";
import ScrollStories from "./ScrollStories";

const posts = [
  {
    userNickname: "teste",
    likedBy: "teste",
    isVideo: false,
    likedByProfilePictureURL: "assets/img/adorable_animals.svg",
    numberOfLikes: "4.561",
    userProfilePictureURL: "assets/img/adorable_animals.svg",
    postPhotoURL: "assets/img/gato-telefone.svg",
  },
  {
    userNickname: "teste",
    likedBy: "teste",
    likedByProfilePictureURL: "assets/img/adorable_animals.svg",
    numberOfLikes: "4.561",
    userProfilePictureURL: "assets/img/adorable_animals.svg",
    postPhotoURL: "assets/img/gato-telefone.svg",
  },
  {
    userNickname: "teste",
    likedBy: "teste",
    likedByProfilePictureURL: "assets/img/adorable_animals.svg",
    numberOfLikes: "4.561",
    userProfilePictureURL: "assets/img/adorable_animals.svg",
    postPhotoURL: "assets/img/gato-telefone.svg",
  },
  {
    userNickname: "teste",
    likedBy: "teste",
    likedByProfilePictureURL: "assets/img/adorable_animals.svg",
    numberOfLikes: "4.561",
    userProfilePictureURL: "assets/img/adorable_animals.svg",
    postPhotoURL: "assets/img/gato-telefone.svg",
  },
];

const user = {
  nickname: "catanacomics",
  name: "Catana",
  profilePictureURL: "assets/img/catanacomics.svg",
};

const stories = [
  {
    userNickname: "9gag",
    userProfilePicture: "assets/img/9gag.svg",
  },
  {
    userNickname: "meowed",
    userProfilePicture: "assets/img/meowed.svg",
  },
  {
    userNickname: "barked",
    userProfilePicture: "assets/img/barked.svg",
  },
  {
    userNickname: "nathanwpylestrangeplanet",
    userProfilePicture: "assets/img/nathanwpylestrangeplanet.svg",
  },
  {
    userNickname: "wawawicomics",
    userProfilePicture: "assets/img/wawawicomics.svg",
  },
  {
    userNickname: "respondeai",
    userProfilePicture: "assets/img/respondeai.svg",
  },
  {
    userNickname: "filomoderna",
    userProfilePicture: "assets/img/filomoderna.svg",
  },
  {
    userNickname: "memeriagourmet",
    userProfilePicture: "assets/img/memeriagourmet.svg",
  },
  {
    userNickname: "teste",
    userProfilePicture: "assets/img/adorable_animals.svg",
  },
  {
    userNickname: "9gag",
    userProfilePicture: "assets/img/9gag.svg",
  },
  {
    userNickname: "meowed",
    userProfilePicture: "assets/img/meowed.svg",
  },
  {
    userNickname: "barked",
    userProfilePicture: "assets/img/barked.svg",
  },
  {
    userNickname: "nathanwpylestrangeplanet",
    userProfilePicture: "assets/img/nathanwpylestrangeplanet.svg",
  },
];

const profilesSuggestions = [
  {
    userNickname: "testeNick",
    profilePictureURL: "assets/img/adorable_animals.svg",
    isFollower: true,
  },
  {
    userNickname: "testeNick",
    profilePictureURL: "assets/img/adorable_animals.svg",
    isFollower: true,
  },
  {
    userNickname: "testeNick",
    profilePictureURL: "assets/img/adorable_animals.svg",
    isFollower: true,
  },
  {
    userNickname: "testeNick",
    profilePictureURL: "assets/img/adorable_animals.svg",
    isFollower: true,
  },
  {
    userNickname: "testeNick",
    profilePictureURL: "assets/img/adorable_animals.svg",
    isFollower: false,
  },
  {
    userNickname: "testeNick",
    profilePictureURL: "assets/img/adorable_animals.svg",
    isFollower: true,
  },
];

export default function App() {
  return (
    <>
      <div class="navbar">
        <div class="container">
          <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" alt="instagram logo" />
          </div>

          <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div class="instagram-mobile">
            <img src="assets/img/logo.png" alt="instagram logo" />
          </div>

          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>

          <div class="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
          </div>

          <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div class="corpo">
        <div class="esquerda">
          <div class="stories">
            {stories.map((storie) => (
              <Stories
                userNickname={storie.userNickname}
                userProfilePicture={storie.userProfilePicture}
              />
            ))}

            <ScrollStories />
          </div>
          <div class="posts">
            {posts.map((post) => (
              <Post
                userNickname={post.userNickname}
                likedBy={post.likedBy}
                numberOfLikes={post.numberOfLikes}
                likedByProfilePictureURL={post.likedByProfilePictureURL}
                userProfilePictureURL={post.userProfilePictureURL}
                postPhotoURL={post.postPhotoURL}
              />
            ))}
          </div>
        </div>
        <div class="sidebar">
          <User
            name={user.name}
            nickname={user.nickname}
            profilePictureURL={user.profilePictureURL}
          />

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {profilesSuggestions.map((profile) => (
              <FollowerSuggestion
                profilePictureURL={profile.profilePictureURL}
                userNickname={profile.userNickname}
                isFollower={profile.isFollower}
              />
            ))}
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">© 2022 INSTAGRAM DO FACEBOOK</div>
        </div>
      </div>

      <div class="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </>
  );
}
