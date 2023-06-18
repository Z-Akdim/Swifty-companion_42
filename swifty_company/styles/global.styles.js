import { StyleSheet } from "react-native";
import { useMemo } from "react";

const useStyle = (props) => ({

    return useMemo(() => StyleSheet.create({
        container: {
            backgroundColor: red;
        }
    }), []);
});