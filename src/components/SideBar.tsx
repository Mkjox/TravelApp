import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Platform, View, StyleSheet, TextComponent } from "react-native";
import { Appbar, useTheme } from "react-native-paper";
import $ from "jquery";
import { Switch } from "react-native-gesture-handler";

type Props = {
  navigation: StackNavigationProp<{}>;
};

type AppbarModes = "small" | "medium" | "large" | "center-aligned";
const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots.vertical";

const AppBar = ({ navigation }: Props) => {
  const [showLeftIcon, setShowLeftIcon] = React.useState(true);
  const [showExactTheme, setShowExactTheme] = React.useState(false);
  const [showSearchIcon, setShowSearchIcon] = React.useState(true);
  const [showMoreIcon, setShowMoreIcon] = React.useState(true);
  const [appBarMode, setAppBarMode] =
    React.useState<AppbarModes>("center-aligned");

  const { isV3 } = useTheme();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Appbar.Header
          theme={{ mode: showExactTheme ? "exact" : "adaptive" }}
          mode={appBarMode}
        >
          {showLeftIcon && (
            <Appbar.BackAction onPress={() => navigation.goBack()} />
          )}
          <Appbar.Content title="Title" />
          {showSearchIcon && (
            <Appbar.Action icon="magnify" onPress={() => {}} />
          )}
          {showMoreIcon && (
            <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
          )}
        </Appbar.Header>
      ),
    });
  }, [
    navigation,
    showLeftIcon,
    showSearchIcon,
    showMoreIcon,
    showExactTheme,
    appBarMode,
    //isCenterAlignedMode
  ]);

  const renderDefaultOptions = () => (
    <>
      <View style={styles.row}>
        <TextComponent>Left icon</TextComponent>
        <Switch value={showLeftIcon} onValueChange={setShowLeftIcon}></Switch>
      </View>
      <View style={styles.row}>
        <TextComponent>Search Icon</TextComponent>
        <Switch value={showSearchIcon} onValueChange={setShowSearchIcon} />
      </View>
      <View style={styles.row}>
        <TextComponent>More Icon</TextComponent>
        <Switch value={showMoreIcon} onValueChange={setShowMoreIcon} />
      </View>
      <View style={styles.row}>
        <TextComponent>Exact Dark Theme</TextComponent>
        <Switch value={showExactTheme} onValueChange={setShowExactTheme} />
      </View>
    </>
  );

    return (
      <>
        
      </>
    );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
  },
  contentContainer: {
    paddingVertical: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
