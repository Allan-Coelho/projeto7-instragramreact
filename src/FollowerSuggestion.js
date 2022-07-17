export default function profileSuggestion(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.profilePictureURL} alt="user"/>
        <div class="texto">
          <div class="nome">{props.userNickname}</div>
          <div class="razao">
            {props.isFollower ? "Segue você" : "Novo no Instagram"}
          </div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
