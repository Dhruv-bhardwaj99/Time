import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoryData } from "../../Redux/action";
import "./Stories.css";

export const Stories = () => {
  const { story, loading, error } = useSelector((store) => store.story) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getStoryData());
  };

  return loading ? (
    "loading..."
  ) : error ? (
    "Error Occured"
  ) : (
    <div className="stoyBody">
      <div className="leftInfo">
        <h1>FEATURED VOICES</h1>
        <div className="leftStory">
            <div>
                <p className="VoiceTitle">Anatal Lieven</p>
                <p>Russia Has Been Warning the West About Ukraine for Decades</p>
            </div>
            <div>
                <p className="VoiceTitle">Anatal Lieven</p>
                <p>Russia Has Been Warning the West About Ukraine for Decades</p>
            </div>
            <div>
                <p className="VoiceTitle">Anatal Lieven</p>
                <p>Russia Has Been Warning the West About Ukraine for Decades</p>
            </div>
            <div>
                <p className="VoiceTitle">Anatal Lieven</p>
                <p>Russia Has Been Warning the West About Ukraine for Decades</p>
            </div>
            <div>
                <p className="VoiceTitle">Anatal Lieven</p>
                <p>Russia Has Been Warning the West About Ukraine for Decades</p>
            </div>
            <div>
                <p className="VoiceTitle">Anatal Lieven</p>
                <p>Russia Has Been Warning the West About Ukraine for Decades</p>
            </div>
        </div>
      </div>
      <div className="rightInfo">
        <h1>Latest Stories</h1>
        {story.map((e, i) => (
          <div className="latestStory" key={i}>
            <h4 onClick={e.link} className="storyTitle">{e.title}</h4>
            <p className="timeAndDate">June 18, 2022 - 12:09 PM EST</p>
          </div>
        ))}
      </div>
    </div>
  );
};
