import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_10169_1651}>
        <View style={styles.View_10169_1646} />
        <View style={styles.View_10169_1647}>
          <View style={styles.View_10169_1648}>
            <View style={styles.View_10169_1649}>
              <Text style={styles.Text_10169_1649}>Sign In</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10169_1640} />
      <View style={styles.View_10169_1643}>
        <Text style={styles.Text_10169_1643}>Password</Text>
      </View>
      <View style={styles.View_10169_1639} />
      <View style={styles.View_10169_1642}>
        <Text style={styles.Text_10169_1642}>Username</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d758be36-48fa-4aaa-88d2-8f944c69f883"
        }}
        style={styles.ImageBackground_10169_1650}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb40bb08-f69e-4d6d-b2f5-0066c42c343d"
        }}
        style={styles.ImageBackground_10169_1638}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 40, 86, 1)" },
  View_2: { height: hp("187%") },
  View_10169_1651: {
    width: wp("40%"),
    height: hp("11%"),
    top: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10169_1646: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(86, 125, 244, 1)"
  },
  View_10169_1647: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%")
  },
  View_10169_1648: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10169_1649: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10169_1649: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1640: {
    width: wp("83%"),
    height: hp("11%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10169_1643: {
    width: wp("28%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_10169_1643: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1639: {
    width: wp("83%"),
    height: hp("11%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10169_1642: {
    width: wp("34%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_10169_1642: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10169_1650: {
    width: wp("44%"),
    height: hp("46%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    resizeMode: "cover"
  },
  ImageBackground_10169_1638: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
