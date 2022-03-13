import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

export default function WidgetSM() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="/sensei.png" alt="User Img" className="widgetSmImg" />
          <div className="widgetSmUser">
            <div className="widgetSMUsername">Ricky Sensei</div>
            <div className="widgetSmUserTitle">Software Engiineer</div>
          </div>
          <button className="widgetSmButton">
              <Visibility/>
              Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="/sensei.png" alt="User Img" className="widgetSmImg" />
          <div className="widgetSmUser">
            <div className="widgetSMUsername">Ricky Sensei</div>
            <div className="widgetSmUserTitle">Software Engiineer</div>
          </div>
          <button className="widgetSmButton">
              <Visibility/>
              Display
          </button>
        </li>
      </ul>
    </div>
  );
}
