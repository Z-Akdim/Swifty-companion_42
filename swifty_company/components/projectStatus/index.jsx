import { View, Text, TouchableOpacity } from "react-native";
import useStyle from "./style.projectStatus";
import { useEffect, useMemo, useState } from "react";

const ProjectStatus = (props) => {
  const { type } = props;
  const Styles = useStyle(type);
  const [status, setStatus] = useState({
    project: true,
    available: false,
    skils: false,
  });

  useEffect(() => {
    console.log("status=>", status);
  }, [status]);
  return (
    <View style={Styles.containerProject}>
      <View style={Styles.containerTabView}>
        {["project", "available", "skills"].map((el) => (
          <TouchableOpacity
            style={[
              Styles.tabView,
              status[el] ? Styles.borderA : Styles.borderD,
            ]}
            onPress={() =>
              Object.keys(status).map((e) => {
                setStatus({
                  [el]: true,
                });
              })
            }
            key={el}
          >
            <Text style={Styles.tabViewTitleA}>{el}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {status.project && (
        <View style={Styles.viewTyopContainer}>
          <Text>Content</Text>
        </View>
      )}
    </View>
  );
};
export default ProjectStatus;
