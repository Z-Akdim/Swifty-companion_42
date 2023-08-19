import { View, Text, TouchableOpacity } from "react-native";
import useStyle from "./style.projectStatus";
import { useEffect, useMemo, useState } from "react";

const ProjectStatus = (props) => {
  const { type } = props;
  const Styles = useStyle(type);
  const [status, setStatus] = useState({
    project: true,
    available: false,
    skills: false,
  });
  console.log(status);
  return (
    <View style={Styles.containerProject}>
      <View style={Styles.containerTabView}>
        {["project", "available", "skills"].map((e) => (
          <TouchableOpacity
            style={[
              Styles.tabView,
              status[e] ? Styles.borderA : Styles.borderD,
            ]}
            onPress={() =>
              Object.keys(status).map(() => {
                setStatus({
                  [e]: true,
                });
              })
            }
            key={e}
          >
            <Text
              style={status[e] ? Styles.tabViewTitleA : Styles.tabViewTitleD}
            >
              {e}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {status.project ? (
        <View style={Styles.viewTyopContainer}>
          <Text>project</Text>
        </View>
      ) : status.available ? (
        <View style={Styles.viewTyopContainer}>
          <Text>available</Text>
        </View>
      ) : (
        status.skills && (
          <View style={Styles.viewTyopContainer}>
            <Text>skils</Text>
          </View>
        )
      )}
    </View>
  );
};
export default ProjectStatus;
