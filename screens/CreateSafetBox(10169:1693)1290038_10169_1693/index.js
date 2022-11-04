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
      <View style={styles.View_10169_1694}>
        <View style={styles.View_10169_1695} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1a9be22-9fc8-45e1-a1ee-588022699283"
          }}
          style={styles.ImageBackground_10169_1696}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe34887f-1b28-4588-bfcc-660819692c0f"
          }}
          style={styles.ImageBackground_10169_1697}
        />
        <View style={styles.View_10169_1701}>
          <Text style={styles.Text_10169_1701}>SVG Icons</Text>
        </View>
        <View style={styles.View_10169_1702}>
          <Text style={styles.Text_10169_1702}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1703}>
        <View style={styles.View_10169_1704} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cef2945-6209-4565-81a3-5095652b177e"
          }}
          style={styles.ImageBackground_10169_1705}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a08440b7-585d-4466-86c7-f948dd38b946"
          }}
          style={styles.ImageBackground_10169_1706}
        />
        <View style={styles.View_10169_1710}>
          <Text style={styles.Text_10169_1710}>SVG Icons</Text>
        </View>
        <View style={styles.View_10169_1711}>
          <Text style={styles.Text_10169_1711}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1712}>
        <View style={styles.View_10169_1713} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07ba2b06-640f-488d-9a5a-7a30ddb21309"
          }}
          style={styles.ImageBackground_10169_1714}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcededc8-23df-47e8-b1e9-fdd27aa2345e"
          }}
          style={styles.ImageBackground_10169_1715}
        />
        <View style={styles.View_10169_1719}>
          <Text style={styles.Text_10169_1719}>SVG Icons</Text>
        </View>
        <View style={styles.View_10169_1720}>
          <Text style={styles.Text_10169_1720}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1721}>
        <View style={styles.View_10169_1722} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37a9af8d-42c0-49bf-a89e-0364e2dfd21a"
          }}
          style={styles.ImageBackground_10169_1723}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68deb933-2be4-4918-bf97-812c50089bd5"
          }}
          style={styles.ImageBackground_10169_1724}
        />
        <View style={styles.View_10169_1728}>
          <Text style={styles.Text_10169_1728}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10169_1729}>
          <Text style={styles.Text_10169_1729}>December 20.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1730}>
        <View style={styles.View_10169_1731} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc2663dc-631c-43ee-a987-c0e816fe8c5a"
          }}
          style={styles.ImageBackground_10169_1732}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/199a4757-ec5d-46df-b239-1d423d8b2634"
          }}
          style={styles.ImageBackground_10169_1733}
        />
        <View style={styles.View_10169_1737}>
          <Text style={styles.Text_10169_1737}>SVG Icons</Text>
        </View>
        <View style={styles.View_10169_1738}>
          <Text style={styles.Text_10169_1738}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1739}>
        <View style={styles.View_10169_1740} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bab0edf-9c2e-491e-a1f2-47bfe595559a"
          }}
          style={styles.ImageBackground_10169_1741}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45a39708-eb15-411d-a83a-17ae4dabb870"
          }}
          style={styles.ImageBackground_10169_1742}
        />
        <View style={styles.View_10169_1746}>
          <Text style={styles.Text_10169_1746}>SVG Icons</Text>
        </View>
        <View style={styles.View_10169_1747}>
          <Text style={styles.Text_10169_1747}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1748}>
        <View style={styles.View_10169_1749} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b8aaf54-c082-4c84-bf63-f5dd1b57e2aa"
          }}
          style={styles.ImageBackground_10169_1750}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f21815c3-ea44-4139-be1e-6e9e0c373cce"
          }}
          style={styles.ImageBackground_10169_1751}
        />
        <View style={styles.View_10169_1755}>
          <Text style={styles.Text_10169_1755}>SVG Icons</Text>
        </View>
        <View style={styles.View_10169_1756}>
          <Text style={styles.Text_10169_1756}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1757}>
        <View style={styles.View_10169_1758} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c72d0531-f7a6-405e-9195-ace6e179643b"
          }}
          style={styles.ImageBackground_10169_1759}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd70dd95-e60f-4f5b-a9e2-a3cf5b591308"
          }}
          style={styles.ImageBackground_10169_1760}
        />
        <View style={styles.View_10169_1764}>
          <Text style={styles.Text_10169_1764}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10169_1765}>
          <Text style={styles.Text_10169_1765}>December 20.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1766}>
        <View style={styles.View_10169_1767} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/080e4ac5-2aa7-441f-b7ec-7853eea19628"
          }}
          style={styles.ImageBackground_10169_1768}
        />
        <View style={styles.View_10169_1772}>
          <Text style={styles.Text_10169_1772}>Novemaber 10.2020</Text>
        </View>
        <View style={styles.View_10169_1773}>
          <Text style={styles.Text_10169_1773}>Clients</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c715c2f-917b-4e4d-bba8-2ffc6ccb5150"
          }}
          style={styles.ImageBackground_10169_1774}
        />
      </View>
      <View style={styles.View_10169_1775}>
        <View style={styles.View_10169_1776} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1850e6c-1079-45b9-be56-6eea3581984a"
          }}
          style={styles.ImageBackground_10169_1777}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6183117-b497-4ea9-93c6-466d90649d03"
          }}
          style={styles.ImageBackground_10169_1778}
        />
        <View style={styles.View_10169_1782}>
          <Text style={styles.Text_10169_1782}>Clients</Text>
        </View>
        <View style={styles.View_10169_1783}>
          <Text style={styles.Text_10169_1783}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1784}>
        <View style={styles.View_10169_1785} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1198d548-c46e-4270-839e-7698baa53bcb"
          }}
          style={styles.ImageBackground_10169_1786}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c3e570c-8d1c-4af2-b649-7c4eb35b6146"
          }}
          style={styles.ImageBackground_10169_1787}
        />
        <View style={styles.View_10169_1791}>
          <Text style={styles.Text_10169_1791}>Clients</Text>
        </View>
        <View style={styles.View_10169_1792}>
          <Text style={styles.Text_10169_1792}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1793}>
        <View style={styles.View_10169_1794} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e1c1d2d-2606-47c0-be31-96e57e54b0c9"
          }}
          style={styles.ImageBackground_10169_1795}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0da39ee7-d8b0-44f2-8284-2c64406f8408"
          }}
          style={styles.ImageBackground_10169_1796}
        />
        <View style={styles.View_10169_1800}>
          <Text style={styles.Text_10169_1800}>References</Text>
        </View>
        <View style={styles.View_10169_1801}>
          <Text style={styles.Text_10169_1801}>Novemaber 22.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1802}>
        <View style={styles.View_10169_1803} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09dfebca-0c65-4ad4-b4e5-7020c21e87a7"
          }}
          style={styles.ImageBackground_10169_1804}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40947388-c3ab-4c9e-81a0-b64d8b5da36a"
          }}
          style={styles.ImageBackground_10169_1805}
        />
        <View style={styles.View_10169_1809}>
          <Text style={styles.Text_10169_1809}>Portfolio</Text>
        </View>
        <View style={styles.View_10169_1810}>
          <Text style={styles.Text_10169_1810}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1811}>
        <View style={styles.View_10169_1812} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1792f395-ac3b-4c28-81be-f79fc4635f06"
          }}
          style={styles.ImageBackground_10169_1813}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb587b08-d197-41e4-883c-4cab495ca92a"
          }}
          style={styles.ImageBackground_10169_1814}
        />
        <View style={styles.View_10169_1818}>
          <Text style={styles.Text_10169_1818}>Portfolio</Text>
        </View>
        <View style={styles.View_10169_1819}>
          <Text style={styles.Text_10169_1819}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1820}>
        <View style={styles.View_10169_1821} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93ee8be4-734f-448c-b5a2-5abdea445904"
          }}
          style={styles.ImageBackground_10169_1822}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d11630f4-9d1f-40ec-af61-1f10877c81a0"
          }}
          style={styles.ImageBackground_10169_1823}
        />
        <View style={styles.View_10169_1827}>
          <Text style={styles.Text_10169_1827}>Portfolio</Text>
        </View>
        <View style={styles.View_10169_1828}>
          <Text style={styles.Text_10169_1828}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1829}>
        <View style={styles.View_10169_1830} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43fc551c-4131-4089-8eda-6ab143dd3164"
          }}
          style={styles.ImageBackground_10169_1831}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d52b9c81-4b88-408c-b372-c2c7b36bae54"
          }}
          style={styles.ImageBackground_10169_1832}
        />
        <View style={styles.View_10169_1836}>
          <Text style={styles.Text_10169_1836}>Design</Text>
        </View>
        <View style={styles.View_10169_1837}>
          <Text style={styles.Text_10169_1837}>December 20.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1838}>
        <View style={styles.View_10169_1839} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cf39fdc-1299-40d4-8798-3410e42bd6d7"
          }}
          style={styles.ImageBackground_10169_1840}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c3a86fe-23af-41b6-8e1b-7a705bfc8fb9"
          }}
          style={styles.ImageBackground_10169_1841}
        />
        <View style={styles.View_10169_1845}>
          <Text style={styles.Text_10169_1845}>Avatars</Text>
        </View>
        <View style={styles.View_10169_1846}>
          <Text style={styles.Text_10169_1846}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1847}>
        <View style={styles.View_10169_1848} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/876913ef-fe97-4749-ba49-da7c862ffadc"
          }}
          style={styles.ImageBackground_10169_1849}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01c38b83-dc38-4f9c-bd57-b5534cd790d1"
          }}
          style={styles.ImageBackground_10169_1850}
        />
        <View style={styles.View_10169_1854}>
          <Text style={styles.Text_10169_1854}>Avatars</Text>
        </View>
        <View style={styles.View_10169_1855}>
          <Text style={styles.Text_10169_1855}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1856}>
        <View style={styles.View_10169_1857} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1e9c3b3-8084-47a0-83a5-1ec005707707"
          }}
          style={styles.ImageBackground_10169_1858}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11b63a92-45ce-4113-a949-2815f22c9df9"
          }}
          style={styles.ImageBackground_10169_1859}
        />
        <View style={styles.View_10169_1863}>
          <Text style={styles.Text_10169_1863}>Avatars</Text>
        </View>
        <View style={styles.View_10169_1864}>
          <Text style={styles.Text_10169_1864}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1865}>
        <View style={styles.View_10169_1866} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5073c3a-a6e3-4dbf-9b0f-54986941ac28"
          }}
          style={styles.ImageBackground_10169_1867}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cd20e8a-8405-4921-a631-be93660a6f75"
          }}
          style={styles.ImageBackground_10169_1868}
        />
        <View style={styles.View_10169_1872}>
          <Text style={styles.Text_10169_1872}>Prototypes</Text>
        </View>
        <View style={styles.View_10169_1873}>
          <Text style={styles.Text_10169_1873}>Novemaber 22.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1874}>
        <View style={styles.View_10169_1875} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5605810-0875-4113-a76b-51751f2d6097"
          }}
          style={styles.ImageBackground_10169_1876}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7be7775a-5b3b-4b2a-ab0b-c5c974beb38b"
          }}
          style={styles.ImageBackground_10169_1877}
        />
        <View style={styles.View_10169_1881}>
          <Text style={styles.Text_10169_1881}>SVG Icons</Text>
        </View>
        <View style={styles.View_10169_1882}>
          <Text style={styles.Text_10169_1882}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1883}>
        <View style={styles.View_10169_1884} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2e537c1-c6a2-4ed9-bf4d-46170072c98e"
          }}
          style={styles.ImageBackground_10169_1885}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0802532-4880-47bb-8c79-bbf34e40f444"
          }}
          style={styles.ImageBackground_10169_1886}
        />
        <View style={styles.View_10169_1890}>
          <Text style={styles.Text_10169_1890}>SVG Icons</Text>
        </View>
        <View style={styles.View_10169_1891}>
          <Text style={styles.Text_10169_1891}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1892}>
        <View style={styles.View_10169_1893} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a02af97-c088-4f42-9330-97ce4c52160f"
          }}
          style={styles.ImageBackground_10169_1894}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18676b1a-ab60-4f9b-867e-03f2300cd706"
          }}
          style={styles.ImageBackground_10169_1895}
        />
        <View style={styles.View_10169_1899}>
          <Text style={styles.Text_10169_1899}>SVG Icons</Text>
        </View>
        <View style={styles.View_10169_1900}>
          <Text style={styles.Text_10169_1900}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10169_1901}>
        <View style={styles.View_10169_1902} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e1633e6-cf3b-43f0-b0be-1053d1764857"
          }}
          style={styles.ImageBackground_10169_1903}
        />
        <View style={styles.View_10169_1907}>
          <Text style={styles.Text_10169_1907}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10169_1908}>
          <Text style={styles.Text_10169_1908}>December 20.2020</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54f86a01-bb3e-410b-8af1-e124baf3feec"
          }}
          style={styles.ImageBackground_10169_1909}
        />
      </View>
      <View style={styles.View_10169_1910}>
        <View style={styles.View_10169_1911}>
          <View style={styles.View_10169_1912}>
            <View style={styles.View_10169_1913} />
            <View style={styles.View_10169_1914} />
            <View style={styles.View_10169_1915} />
            <View style={styles.View_10169_1916} />
            <View style={styles.View_10169_1917} />
            <View style={styles.View_10169_1918} />
          </View>
        </View>
        <View style={styles.View_10169_1919}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fd77d12-10a4-4587-8304-38a360f8cab7"
            }}
            style={styles.ImageBackground_10169_1920}
          />
          <View style={styles.View_10169_1921}>
            <Text style={styles.Text_10169_1921}>Recent</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10169_1939}>
        <View style={styles.View_10169_1940} />
        <View style={styles.View_10169_1941}>
          <View style={styles.View_10169_1942} />
          <View style={styles.View_10169_1943}>
            <View style={styles.View_10169_1944} />
            <View style={styles.View_10169_1945}>
              <View style={styles.View_10169_1946}>
                <View style={styles.View_10169_1947}>
                  <Text style={styles.Text_10169_1947}>Create</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_10169_1948} />
          <View style={styles.View_10169_1949}>
            <Text style={styles.Text_10169_1949}>Password</Text>
          </View>
          <View style={styles.View_10169_1950} />
          <View style={styles.View_10169_1951}>
            <Text style={styles.Text_10169_1951}>Administrative Email</Text>
          </View>
          <View style={styles.View_10169_1952} />
          <View style={styles.View_10169_1953}>
            <Text style={styles.Text_10169_1953}>Vault Name</Text>
          </View>
          <View style={styles.View_10169_1954}>
            <Text style={styles.Text_10169_1954}>New SafeT Box</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10169_1922}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a135f730-d528-42dd-bafc-724c778ee6cd"
          }}
          style={styles.ImageBackground_10169_1923}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0c27d92-f578-47ed-91ed-e69acd03ba65"
          }}
          style={styles.ImageBackground_10169_1924}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2efbebb-031b-4549-af71-0b159002e288"
        }}
        style={styles.ImageBackground_10169_1927}
      />
      <View style={styles.View_10169_1928}>
        <View style={styles.View_I10169_1928_10078_1693} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4333e4f-352a-4ff1-849a-2210c8b8040b"
          }}
          style={styles.ImageBackground_I10169_1928_10078_1833}
        />
        <View style={styles.View_I10169_1928_10078_1694}>
          <Text style={styles.Text_I10169_1928_10078_1694}>
            Search SafeTBoxes
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6fc53bc-3d1b-4996-9456-530ffe9e2b91"
          }}
          style={styles.ImageBackground_I10169_1928_10078_1703}
        />
      </View>
      <View style={styles.View_10169_1929}>
        <View style={styles.View_10169_1930}>
          <Text style={styles.Text_10169_1930}>Welcome back John</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 40, 86, 1)" },
  View_2: { height: hp("187%") },
  View_10169_1694: {
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
  View_10169_1695: {
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
  ImageBackground_10169_1696: {
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
  ImageBackground_10169_1697: {
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
  View_10169_1701: {
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
  Text_10169_1701: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1702: {
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
  Text_10169_1702: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1703: {
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
  View_10169_1704: {
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
  ImageBackground_10169_1705: {
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
  ImageBackground_10169_1706: {
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
  View_10169_1710: {
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
  Text_10169_1710: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1711: {
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
  Text_10169_1711: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1712: {
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
  View_10169_1713: {
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
  ImageBackground_10169_1714: {
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
  ImageBackground_10169_1715: {
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
  View_10169_1719: {
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
  Text_10169_1719: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1720: {
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
  Text_10169_1720: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1721: {
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
  View_10169_1722: {
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
  ImageBackground_10169_1723: {
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
  ImageBackground_10169_1724: {
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
  View_10169_1728: {
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
  Text_10169_1728: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1729: {
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
  Text_10169_1729: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1730: {
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
  View_10169_1731: {
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
  ImageBackground_10169_1732: {
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
  ImageBackground_10169_1733: {
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
  View_10169_1737: {
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
  Text_10169_1737: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1738: {
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
  Text_10169_1738: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1739: {
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
  View_10169_1740: {
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
  ImageBackground_10169_1741: {
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
  ImageBackground_10169_1742: {
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
  View_10169_1746: {
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
  Text_10169_1746: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1747: {
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
  Text_10169_1747: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1748: {
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
  View_10169_1749: {
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
  ImageBackground_10169_1750: {
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
  ImageBackground_10169_1751: {
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
  View_10169_1755: {
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
  Text_10169_1755: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1756: {
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
  Text_10169_1756: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1757: {
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
  View_10169_1758: {
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
  ImageBackground_10169_1759: {
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
  ImageBackground_10169_1760: {
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
  View_10169_1764: {
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
  Text_10169_1764: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1765: {
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
  Text_10169_1765: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1766: {
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
  View_10169_1767: {
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
  ImageBackground_10169_1768: {
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
  View_10169_1772: {
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
  Text_10169_1772: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1773: {
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
  Text_10169_1773: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10169_1774: {
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
  View_10169_1775: {
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
  View_10169_1776: {
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
  ImageBackground_10169_1777: {
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
  ImageBackground_10169_1778: {
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
  View_10169_1782: {
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
  Text_10169_1782: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1783: {
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
  Text_10169_1783: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1784: {
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
  View_10169_1785: {
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
  ImageBackground_10169_1786: {
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
  ImageBackground_10169_1787: {
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
  View_10169_1791: {
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
  Text_10169_1791: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1792: {
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
  Text_10169_1792: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1793: {
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
  View_10169_1794: {
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
  ImageBackground_10169_1795: {
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
  ImageBackground_10169_1796: {
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
  View_10169_1800: {
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
  Text_10169_1800: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1801: {
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
  Text_10169_1801: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1802: {
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
  View_10169_1803: {
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
  ImageBackground_10169_1804: {
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
  ImageBackground_10169_1805: {
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
  View_10169_1809: {
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
  Text_10169_1809: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1810: {
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
  Text_10169_1810: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1811: {
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
  View_10169_1812: {
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
  ImageBackground_10169_1813: {
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
  ImageBackground_10169_1814: {
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
  View_10169_1818: {
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
  Text_10169_1818: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1819: {
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
  Text_10169_1819: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1820: {
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
  View_10169_1821: {
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
  ImageBackground_10169_1822: {
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
  ImageBackground_10169_1823: {
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
  View_10169_1827: {
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
  Text_10169_1827: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1828: {
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
  Text_10169_1828: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1829: {
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
  View_10169_1830: {
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
  ImageBackground_10169_1831: {
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
  ImageBackground_10169_1832: {
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
  View_10169_1836: {
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
  Text_10169_1836: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1837: {
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
  Text_10169_1837: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1838: {
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
  View_10169_1839: {
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
  ImageBackground_10169_1840: {
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
  ImageBackground_10169_1841: {
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
  View_10169_1845: {
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
  Text_10169_1845: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1846: {
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
  Text_10169_1846: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1847: {
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
  View_10169_1848: {
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
  ImageBackground_10169_1849: {
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
  ImageBackground_10169_1850: {
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
  View_10169_1854: {
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
  Text_10169_1854: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1855: {
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
  Text_10169_1855: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1856: {
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
  View_10169_1857: {
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
  ImageBackground_10169_1858: {
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
  ImageBackground_10169_1859: {
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
  View_10169_1863: {
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
  Text_10169_1863: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1864: {
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
  Text_10169_1864: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1865: {
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
  View_10169_1866: {
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
  ImageBackground_10169_1867: {
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
  ImageBackground_10169_1868: {
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
  View_10169_1872: {
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
  Text_10169_1872: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1873: {
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
  Text_10169_1873: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1874: {
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
  View_10169_1875: {
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
  ImageBackground_10169_1876: {
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
  ImageBackground_10169_1877: {
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
  View_10169_1881: {
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
  Text_10169_1881: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1882: {
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
  Text_10169_1882: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1883: {
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
  View_10169_1884: {
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
  ImageBackground_10169_1885: {
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
  ImageBackground_10169_1886: {
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
  View_10169_1890: {
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
  Text_10169_1890: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1891: {
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
  Text_10169_1891: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1892: {
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
  View_10169_1893: {
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
  ImageBackground_10169_1894: {
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
  ImageBackground_10169_1895: {
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
  View_10169_1899: {
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
  Text_10169_1899: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1900: {
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
  Text_10169_1900: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1901: {
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
  View_10169_1902: {
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
  ImageBackground_10169_1903: {
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
  View_10169_1907: {
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
  Text_10169_1907: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1908: {
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
  Text_10169_1908: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10169_1909: {
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
  View_10169_1910: {
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
  View_10169_1911: {
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
  View_10169_1912: {
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
  View_10169_1913: {
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
  View_10169_1914: {
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
  View_10169_1915: {
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
  View_10169_1916: {
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
  View_10169_1917: {
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
  View_10169_1918: {
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
  View_10169_1919: {
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
  ImageBackground_10169_1920: {
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
  View_10169_1921: {
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
  Text_10169_1921: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1939: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("187%"),
    minHeight: hp("187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10169_1940: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("187%"),
    minHeight: hp("187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.550000011920929
  },
  View_10169_1941: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("33%")
  },
  View_10169_1942: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 220, 220, 1)"
  },
  View_10169_1943: {
    width: wp("21%"),
    height: hp("6%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_10169_1944: {
    width: wp("21%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 125, 244, 1)"
  },
  View_10169_1945: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_10169_1946: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10169_1947: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10169_1947: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1948: {
    width: wp("40%"),
    height: hp("9%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10169_1949: {
    width: wp("8%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_10169_1949: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1950: {
    width: wp("40%"),
    height: hp("9%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10169_1951: {
    width: wp("18%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_10169_1951: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1952: {
    width: wp("40%"),
    height: hp("9%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10169_1953: {
    width: wp("12%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_10169_1953: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1954: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_10169_1954: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1922: {
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
  ImageBackground_10169_1923: {
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
  ImageBackground_10169_1924: {
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
  ImageBackground_10169_1927: {
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
  View_10169_1928: {
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
  View_I10169_1928_10078_1693: {
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
  ImageBackground_I10169_1928_10078_1833: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  View_I10169_1928_10078_1694: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I10169_1928_10078_1694: {
    color: "rgba(34, 33, 91, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I10169_1928_10078_1703: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_10169_1929: {
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
  View_10169_1930: {
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
  Text_10169_1930: {
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
