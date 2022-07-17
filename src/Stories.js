export default function Stories(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.userProfilePicture} alt="story profile"/>
      </div>
      <div class="usuario">{props.userNickname}</div>
    </div>
  );
}
