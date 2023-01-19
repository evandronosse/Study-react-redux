import { connect } from "react-redux";

function Video({ activeModule, activeLesson }) {
  return (
    <div>
      <strong>Módulo {activeModule.title}</strong>
      <span>Aula activeLesson{activeLesson.title}</span>
    </div>
  );
}

export default connect((state) => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson,
}))(Video);
