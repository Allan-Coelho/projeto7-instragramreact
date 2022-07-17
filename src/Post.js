export default function Post(props) {
  function postLike(clickEvent) {
    const postElement = clickEvent.target.parentElement.parentElement;
    const likeButton =
      postElement.children[2].children[0].children[0].children[0];
    likeButton.classList.add("liked");
    likeButton.attributes[0].value = "heart";
  }

  function buttonLike(clickEvent) {
    const likeButton = clickEvent.target;
    const likeButtonClasses = likeButton.classList;

    if (likeButtonClasses.contains("liked")) {
      likeButtonClasses.remove("liked");
      likeButton.attributes[0].value = "heart-outline";
    } else {
      likeButtonClasses.add("liked");
      likeButton.attributes[0].value = "heart";
    }
  }
  //   <video autoPlay="true">
  //<source src={props.postPhotoURL} type="video/mp4" />
  //Sorry, your browser doesn't support embedded videos.
  //</video>
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.userProfilePictureURL} alt="user" />
          {props.userNickname}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo" onClick={(event) => postLike(event)}>
        <img src={props.postPhotoURL} alt="Post" />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              name="heart-outline"
              onClick={(e) => buttonLike(e)}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.likedByProfilePictureURL} alt="likes" />
          <div class="texto">
            Curtido por <strong>{props.likedBy}</strong> e{" "}
            <strong>outras {props.numberOfLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
