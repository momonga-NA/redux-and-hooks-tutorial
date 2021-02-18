import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../style/style.css';

const App = () =>{
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label　htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle"/>
        </div>
        <div className="form-group">
          <label　htmlFor="formEventBody">ボディー</label>
          <input className="form-control" id="formEventBody" />
        </div>

        <button className="btn btn-primary btn-margin">イベントを作成する</button>
        <button className="btn btn-danger btn-margin">全てのイベントを削除する</button>
      </form>
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>BODY</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
    </div>
  );
}

export default App;