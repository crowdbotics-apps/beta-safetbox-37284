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
      <View style={styles.View_10081_2154}>
        <View style={styles.View_10081_2155} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e39b9fe-dab4-47a2-b75b-c05de273b7a4"
          }}
          style={styles.ImageBackground_10081_2156}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97194975-d128-4c58-b43b-1052a5c8eb70"
          }}
          style={styles.ImageBackground_10081_2157}
        />
        <View style={styles.View_10081_2161}>
          <Text style={styles.Text_10081_2161}>SVG Icons</Text>
        </View>
        <View style={styles.View_10081_2162}>
          <Text style={styles.Text_10081_2162}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_2145}>
        <View style={styles.View_10081_2146} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c6a0874-ab83-433b-80e7-c0f3cfc7dd91"
          }}
          style={styles.ImageBackground_10081_2147}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39b0c2d4-d0d6-4df0-ae58-8ecac2398d30"
          }}
          style={styles.ImageBackground_10081_2148}
        />
        <View style={styles.View_10081_2152}>
          <Text style={styles.Text_10081_2152}>SVG Icons</Text>
        </View>
        <View style={styles.View_10081_2153}>
          <Text style={styles.Text_10081_2153}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_2136}>
        <View style={styles.View_10081_2137} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4953991c-0b69-4b1d-9fdc-fd2f1bdec621"
          }}
          style={styles.ImageBackground_10081_2138}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b53bf0c1-9330-4693-8171-6d5aa76e4bc3"
          }}
          style={styles.ImageBackground_10081_2139}
        />
        <View style={styles.View_10081_2143}>
          <Text style={styles.Text_10081_2143}>SVG Icons</Text>
        </View>
        <View style={styles.View_10081_2144}>
          <Text style={styles.Text_10081_2144}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_2127}>
        <View style={styles.View_10081_2128} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e70d2ba-e742-4fb8-a994-2da903383946"
          }}
          style={styles.ImageBackground_10081_2129}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00d48ea5-0da3-42a5-95f5-0278973cc234"
          }}
          style={styles.ImageBackground_10081_2130}
        />
        <View style={styles.View_10081_2134}>
          <Text style={styles.Text_10081_2134}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10081_2135}>
          <Text style={styles.Text_10081_2135}>December 20.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1791}>
        <View style={styles.View_10078_1792} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/901f3950-0d53-4f80-9b84-4ab60fd99d84"
          }}
          style={styles.ImageBackground_10078_2119}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04fe22d9-6483-4033-bff2-7c60f884eb9a"
          }}
          style={styles.ImageBackground_10078_1793}
        />
        <View style={styles.View_10078_1797}>
          <Text style={styles.Text_10078_1797}>SVG Icons</Text>
        </View>
        <View style={styles.View_10078_1798}>
          <Text style={styles.Text_10078_1798}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1734}>
        <View style={styles.View_10078_1735} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3a62ba1-985e-469b-8819-8b4489ea4b8d"
          }}
          style={styles.ImageBackground_10078_2118}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/259031de-ee8f-411e-8172-61a5f39107c3"
          }}
          style={styles.ImageBackground_10078_1736}
        />
        <View style={styles.View_10078_1740}>
          <Text style={styles.Text_10078_1740}>SVG Icons</Text>
        </View>
        <View style={styles.View_10078_1741}>
          <Text style={styles.Text_10078_1741}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1659}>
        <View style={styles.View_10078_1660} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c7df375-f3c1-4691-bf68-571a0563bb7b"
          }}
          style={styles.ImageBackground_10078_2109}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1c3af13-f05d-4b15-9950-b0d7aa0e545a"
          }}
          style={styles.ImageBackground_10078_1661}
        />
        <View style={styles.View_10078_1665}>
          <Text style={styles.Text_10078_1665}>SVG Icons</Text>
        </View>
        <View style={styles.View_10078_1666}>
          <Text style={styles.Text_10078_1666}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1648}>
        <View style={styles.View_10078_1649} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54ce9505-40bc-49c5-8e59-b5f0e99b96f7"
          }}
          style={styles.ImageBackground_10078_2108}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a282884-3dfc-483e-ac56-6f58b00a9fc7"
          }}
          style={styles.ImageBackground_10078_1650}
        />
        <View style={styles.View_10078_1654}>
          <Text style={styles.Text_10078_1654}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10078_1655}>
          <Text style={styles.Text_10078_1655}>December 20.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1813}>
        <View style={styles.View_10078_1814} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06f54c13-3ba7-406f-b2a1-c24ee2c15078"
          }}
          style={styles.ImageBackground_10078_1815}
        />
        <View style={styles.View_10078_1820}>
          <Text style={styles.Text_10078_1820}>Novemaber 10.2020</Text>
        </View>
        <View style={styles.View_10078_1819}>
          <Text style={styles.Text_10078_1819}>Clients</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4150b6db-febc-4f1a-9e02-5e2a1f875f7d"
          }}
          style={styles.ImageBackground_10078_2120}
        />
      </View>
      <View style={styles.View_10078_1756}>
        <View style={styles.View_10078_1757} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/950ef10f-17ac-4b84-a61e-997281886316"
          }}
          style={styles.ImageBackground_10078_2117}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e16abbc8-d95d-45de-a6d0-8319e108b5f2"
          }}
          style={styles.ImageBackground_10078_1758}
        />
        <View style={styles.View_10078_1762}>
          <Text style={styles.Text_10078_1762}>Clients</Text>
        </View>
        <View style={styles.View_10078_1763}>
          <Text style={styles.Text_10078_1763}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1681}>
        <View style={styles.View_10078_1682} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7992cd73-08a9-4c48-b4bf-8b7af39edb67"
          }}
          style={styles.ImageBackground_10078_2110}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1c6a460-8d2f-45b6-8d8e-d8ef615a583f"
          }}
          style={styles.ImageBackground_10078_1683}
        />
        <View style={styles.View_10078_1687}>
          <Text style={styles.Text_10078_1687}>Clients</Text>
        </View>
        <View style={styles.View_10078_1688}>
          <Text style={styles.Text_10078_1688}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1615}>
        <View style={styles.View_10078_1616} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c0862d1-d74b-4a23-9eb5-4484fc72dcb8"
          }}
          style={styles.ImageBackground_10078_2107}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c448e4b7-587e-488f-87d9-339854595d2a"
          }}
          style={styles.ImageBackground_10078_1617}
        />
        <View style={styles.View_10078_1621}>
          <Text style={styles.Text_10078_1621}>References</Text>
        </View>
        <View style={styles.View_10078_1622}>
          <Text style={styles.Text_10078_1622}>Novemaber 22.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1780}>
        <View style={styles.View_10078_1781} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89580439-5779-4c60-90e2-1faf7c63dd41"
          }}
          style={styles.ImageBackground_10078_2121}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68ba260d-6ef3-490f-9de0-56ac0d70b80c"
          }}
          style={styles.ImageBackground_10078_1782}
        />
        <View style={styles.View_10078_1786}>
          <Text style={styles.Text_10078_1786}>Portfolio</Text>
        </View>
        <View style={styles.View_10078_1787}>
          <Text style={styles.Text_10078_1787}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1723}>
        <View style={styles.View_10078_1724} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ec38888-850e-4c97-9bb3-b42be84641f3"
          }}
          style={styles.ImageBackground_10078_2116}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d186ffab-4940-42c2-8c72-0bc909a3fd70"
          }}
          style={styles.ImageBackground_10078_1725}
        />
        <View style={styles.View_10078_1729}>
          <Text style={styles.Text_10078_1729}>Portfolio</Text>
        </View>
        <View style={styles.View_10078_1730}>
          <Text style={styles.Text_10078_1730}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1637}>
        <View style={styles.View_10078_1638} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1794c3ca-7645-4aa3-8dea-9a8ecdb630c7"
          }}
          style={styles.ImageBackground_10078_2111}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db8b3c07-6077-428b-a8b2-c3ca6c5ee3b0"
          }}
          style={styles.ImageBackground_10078_1639}
        />
        <View style={styles.View_10078_1643}>
          <Text style={styles.Text_10078_1643}>Portfolio</Text>
        </View>
        <View style={styles.View_10078_1644}>
          <Text style={styles.Text_10078_1644}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1593}>
        <View style={styles.View_10078_1594} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cab861b1-648b-49db-b9e2-f0de607fb495"
          }}
          style={styles.ImageBackground_10078_2105}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e422ca07-4590-44f8-a5e9-aec4e2b03f50"
          }}
          style={styles.ImageBackground_10078_1595}
        />
        <View style={styles.View_10078_1599}>
          <Text style={styles.Text_10078_1599}>Design</Text>
        </View>
        <View style={styles.View_10078_1600}>
          <Text style={styles.Text_10078_1600}>December 20.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1802}>
        <View style={styles.View_10078_1803} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33183d78-7292-4098-b4d7-ef171f82895f"
          }}
          style={styles.ImageBackground_10078_2122}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a0a6113-48ae-47da-80d1-2f4c4c3884c8"
          }}
          style={styles.ImageBackground_10078_1804}
        />
        <View style={styles.View_10078_1808}>
          <Text style={styles.Text_10078_1808}>Avatars</Text>
        </View>
        <View style={styles.View_10078_1809}>
          <Text style={styles.Text_10078_1809}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1745}>
        <View style={styles.View_10078_1746} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b36b2f19-8d9f-497c-a6b6-3bda254e0342"
          }}
          style={styles.ImageBackground_10078_2115}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76c6d913-ecac-4ecd-b83c-837fcee489e3"
          }}
          style={styles.ImageBackground_10078_1747}
        />
        <View style={styles.View_10078_1751}>
          <Text style={styles.Text_10078_1751}>Avatars</Text>
        </View>
        <View style={styles.View_10078_1752}>
          <Text style={styles.Text_10078_1752}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1670}>
        <View style={styles.View_10078_1671} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b48dec5a-d48e-4636-9dec-21961f24ec77"
          }}
          style={styles.ImageBackground_10078_2112}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a90f6234-3f6b-416f-84ef-4cbd84267dcc"
          }}
          style={styles.ImageBackground_10078_1672}
        />
        <View style={styles.View_10078_1676}>
          <Text style={styles.Text_10078_1676}>Avatars</Text>
        </View>
        <View style={styles.View_10078_1677}>
          <Text style={styles.Text_10078_1677}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1604}>
        <View style={styles.View_10078_1605} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ce2ac00-ebd9-4c21-9e83-424e19659aee"
          }}
          style={styles.ImageBackground_10078_2104}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e09f75af-54e0-4e2c-9dd8-4f44d991c64a"
          }}
          style={styles.ImageBackground_10078_1606}
        />
        <View style={styles.View_10078_1610}>
          <Text style={styles.Text_10078_1610}>Prototypes</Text>
        </View>
        <View style={styles.View_10078_1611}>
          <Text style={styles.Text_10078_1611}>Novemaber 22.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1769}>
        <View style={styles.View_10078_1770} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4c45989-da41-49f0-bebf-6691be7a1c02"
          }}
          style={styles.ImageBackground_10078_2123}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a832b08-086c-47e4-a6ec-f6ba7de61b38"
          }}
          style={styles.ImageBackground_10078_1771}
        />
        <View style={styles.View_10078_1775}>
          <Text style={styles.Text_10078_1775}>SVG Icons</Text>
        </View>
        <View style={styles.View_10078_1776}>
          <Text style={styles.Text_10078_1776}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1712}>
        <View style={styles.View_10078_1713} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b66f4d73-3701-46ee-b755-91883fecfb6c"
          }}
          style={styles.ImageBackground_10078_2114}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/730b6757-14d3-41d5-b705-a4a31e641397"
          }}
          style={styles.ImageBackground_10078_1714}
        />
        <View style={styles.View_10078_1718}>
          <Text style={styles.Text_10078_1718}>SVG Icons</Text>
        </View>
        <View style={styles.View_10078_1719}>
          <Text style={styles.Text_10078_1719}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1626}>
        <View style={styles.View_10078_1627} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22419c15-67a9-46f7-9424-5edba087c308"
          }}
          style={styles.ImageBackground_10078_2113}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd5e810b-4adb-4489-b6ab-af3212db27ad"
          }}
          style={styles.ImageBackground_10078_1628}
        />
        <View style={styles.View_10078_1632}>
          <Text style={styles.Text_10078_1632}>SVG Icons</Text>
        </View>
        <View style={styles.View_10078_1633}>
          <Text style={styles.Text_10078_1633}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_1582}>
        <View style={styles.View_10078_1583} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49f65064-9fa4-450c-9726-657f0c38540b"
          }}
          style={styles.ImageBackground_10078_1584}
        />
        <View style={styles.View_10078_1588}>
          <Text style={styles.Text_10078_1588}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10078_1589}>
          <Text style={styles.Text_10078_1589}>December 20.2020</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a506e18e-56e7-46c9-8247-835d09ced1d3"
          }}
          style={styles.ImageBackground_10078_2103}
        />
      </View>
      <View style={styles.View_10169_1687}>
        <View style={styles.View_10078_1825}>
          <View style={styles.View_10078_1826}>
            <View style={styles.View_10078_1827} />
            <View style={styles.View_10078_1828} />
            <View style={styles.View_10078_1829} />
            <View style={styles.View_10078_1830} />
            <View style={styles.View_10078_1831} />
            <View style={styles.View_10078_1832} />
          </View>
        </View>
        <View style={styles.View_10169_1653}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b133151c-4d99-4c61-a6f0-0268f3071ccf"
            }}
            style={styles.ImageBackground_10078_2144}
          />
          <View style={styles.View_10078_1696}>
            <Text style={styles.Text_10078_1696}>Recent</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10078_1707}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f7e87ca-5e13-4959-900b-6495cd3ccd7e"
          }}
          style={styles.ImageBackground_10078_1708}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/353450bd-4433-4028-9da5-157fcc6ea1cd"
          }}
          style={styles.ImageBackground_10078_1709}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc17c8f2-e1a7-43b9-91ad-7813705f4513"
        }}
        style={styles.ImageBackground_10078_1768}
      />
      <View style={styles.View_10169_1652}>
        <View style={styles.View_10078_1693} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50b4ff6b-b079-40e8-9afb-77e8272e6fab"
          }}
          style={styles.ImageBackground_10078_1833}
        />
        <View style={styles.View_10078_1694}>
          <Text style={styles.Text_10078_1694}>Search SafeTBoxes</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a998d080-9168-444a-b149-bab55a35df40"
          }}
          style={styles.ImageBackground_10078_1703}
        />
      </View>
      <View style={styles.View_10078_1575}>
        <View style={styles.View_10078_1581}>
          <Text style={styles.Text_10078_1581}>Welcome back John</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 40, 86, 1)" },
  View_2: { height: hp("187%") },
  View_10081_2154: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("166%")
  },
  View_10081_2155: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_2156: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_2157: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_2161: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_2161: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2162: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_2162: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2145: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("166%")
  },
  View_10081_2146: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_2147: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_2148: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_2152: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_2152: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2153: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_2153: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2136: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("166%")
  },
  View_10081_2137: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_2138: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_2139: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_2143: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_2143: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2144: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_2144: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2127: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("166%")
  },
  View_10081_2128: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_2129: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_2130: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_2134: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_2134: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2135: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_2135: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1791: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("143%")
  },
  View_10078_1792: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2119: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1793: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1797: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1797: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1798: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1798: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1734: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("143%")
  },
  View_10078_1735: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2118: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1736: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1740: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1740: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1741: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1741: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1659: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("143%")
  },
  View_10078_1660: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2109: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1661: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1665: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1665: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1666: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1666: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1648: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("143%")
  },
  View_10078_1649: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2108: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1650: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1654: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1654: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1655: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1655: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1813: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("119%")
  },
  View_10078_1814: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_1815: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1820: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1820: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1819: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1819: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2120: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_10078_1756: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("119%")
  },
  View_10078_1757: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2117: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1758: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1762: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1762: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1763: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1763: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1681: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("119%")
  },
  View_10078_1682: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2110: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1683: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1687: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1687: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1688: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1688: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1615: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("119%")
  },
  View_10078_1616: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2107: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1617: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1621: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1621: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1622: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1622: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1780: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("96%")
  },
  View_10078_1781: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2121: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1782: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1786: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1786: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1787: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1787: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1723: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("96%")
  },
  View_10078_1724: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2116: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1725: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1729: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1729: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1730: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1730: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1637: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("96%")
  },
  View_10078_1638: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2111: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1639: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1643: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1643: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1644: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1644: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1593: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("96%")
  },
  View_10078_1594: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2105: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1595: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1599: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1599: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1600: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1600: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1802: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("73%")
  },
  View_10078_1803: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2122: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1804: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1808: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1808: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1809: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1809: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1745: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("73%")
  },
  View_10078_1746: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2115: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1747: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1751: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1751: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1752: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1752: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1670: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("73%")
  },
  View_10078_1671: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2112: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1672: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1676: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1676: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1677: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1677: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1604: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("73%")
  },
  View_10078_1605: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2104: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1606: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1610: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1610: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1611: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1611: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1769: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("49%")
  },
  View_10078_1770: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1771: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1775: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1775: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1776: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1776: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1712: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("49%")
  },
  View_10078_1713: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2114: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1714: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1718: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1718: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1719: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1719: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1626: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("49%")
  },
  View_10078_1627: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_2113: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10078_1628: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1632: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1632: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1633: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1633: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1582: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("49%")
  },
  View_10078_1583: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10078_1584: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10078_1588: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_1588: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1589: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1589: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2103: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_10169_1687: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("40%")
  },
  View_10078_1825: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("0%")
  },
  View_10078_1826: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_1827: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_1828: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_1829: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_1830: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_1831: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_1832: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10169_1653: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_10078_2144: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  View_10078_1696: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_1696: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1707: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("167%")
  },
  ImageBackground_10078_1708: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10078_1709: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%")
  },
  ImageBackground_10078_1768: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%")
  },
  View_10169_1652: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10078_1693: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  ImageBackground_10078_1833: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  View_10078_1694: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_10078_1694: {
    color: "rgba(34, 33, 91, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_1703: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_10078_1575: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%")
  },
  View_10078_1581: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_1581: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
