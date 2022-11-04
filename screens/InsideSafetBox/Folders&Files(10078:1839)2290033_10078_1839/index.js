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
      <View style={styles.View_10169_1669}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c54993ba-6fbc-44d1-9ad9-0f0ce7c6f06f"
          }}
          style={styles.ImageBackground_10081_2178}
        />
        <View style={styles.View_10081_2185}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef9c6cbf-aea1-4334-bed5-6dc7dc00ae1d"
            }}
            style={styles.ImageBackground_10081_2186}
          />
          <View style={styles.View_10081_2190}>
            <Text style={styles.Text_10081_2190}>Mobile Apps</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10169_1670}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9acb4418-750f-465c-b537-5cc2dba4fd06"
          }}
          style={styles.ImageBackground_10081_2176}
        />
        <View style={styles.View_10081_2179}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39ef011a-bd52-414a-a384-373a552a1ef3"
            }}
            style={styles.ImageBackground_10081_2180}
          />
          <View style={styles.View_10081_2184}>
            <Text style={styles.Text_10081_2184}>Mobile Apps</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10169_1671}>
        <View style={styles.View_10081_2169}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36f77423-ce2d-49a7-b763-eb601706d7c7"
            }}
            style={styles.ImageBackground_10081_2170}
          />
          <View style={styles.View_10081_2174}>
            <Text style={styles.Text_10081_2174}>Mobile Apps</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74f1c2ae-47f5-4108-bcb9-8eada5a5b83d"
          }}
          style={styles.ImageBackground_10081_2177}
        />
      </View>
      <View style={styles.View_10169_1672}>
        <View style={styles.View_10081_2163}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/beeacdbf-1b7b-41e3-9edf-897889fe19b3"
            }}
            style={styles.ImageBackground_10081_2164}
          />
          <View style={styles.View_10081_2168}>
            <Text style={styles.Text_10081_2168}>Mobile Apps</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16f502c2-4ec6-444b-952a-d7e1b7719b8f"
          }}
          style={styles.ImageBackground_10081_2175}
        />
      </View>
      <View style={styles.View_10169_1667}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30f9b458-9dbc-413e-8a81-fabaef10a61d"
          }}
          style={styles.ImageBackground_10078_2439}
        />
        <View style={styles.View_10078_2344}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd7fd14b-dc7f-4f39-b6dc-e4cb567ee28f"
            }}
            style={styles.ImageBackground_10078_2345}
          />
          <View style={styles.View_10078_2349}>
            <Text style={styles.Text_10078_2349}>Mobile Apps</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10169_1666}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c78526af-d0e0-4b30-95aa-0867e3ecbc60"
          }}
          style={styles.ImageBackground_10078_2437}
        />
        <View style={styles.View_10078_2335}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0161381b-121c-4852-b02d-4eeca10f242f"
            }}
            style={styles.ImageBackground_10078_2336}
          />
          <View style={styles.View_10078_2340}>
            <Text style={styles.Text_10078_2340}>Mobile Apps</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10169_1665}>
        <View style={styles.View_10078_2326}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c95022d4-d484-496e-ab4d-92bcd0f71555"
            }}
            style={styles.ImageBackground_10078_2327}
          />
          <View style={styles.View_10078_2331}>
            <Text style={styles.Text_10078_2331}>Mobile Apps</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e12c9a4-83cb-4890-b9a2-f911fac2f82e"
          }}
          style={styles.ImageBackground_10078_2438}
        />
      </View>
      <View style={styles.View_10169_1664}>
        <View style={styles.View_10078_2317}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c297acfd-546a-413a-957e-444102956590"
            }}
            style={styles.ImageBackground_10078_2318}
          />
          <View style={styles.View_10078_2322}>
            <Text style={styles.Text_10078_2322}>Mobile Apps</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bec2d4ad-8661-44af-81eb-a79c3fd4ebb5"
          }}
          style={styles.ImageBackground_10078_2436}
        />
      </View>
      <View style={styles.View_10078_2308}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ad3db1a-5d85-4f7e-b624-e5843a085c2d"
          }}
          style={styles.ImageBackground_10078_2309}
        />
        <View style={styles.View_10078_2313}>
          <Text style={styles.Text_10078_2313}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10078_2488}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3fae82a-34f0-4476-9d1c-af03e6dd3c78"
            }}
            style={styles.ImageBackground_I10078_2488_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8be189e-608d-4c0c-9449-0b682a277655"
            }}
            style={styles.ImageBackground_I10078_2488_10078_2408}
          />
        </View>
      </View>
      <View style={styles.View_10078_2299}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf7723dc-fe8b-4e16-97ff-821850951745"
          }}
          style={styles.ImageBackground_10078_2300}
        />
        <View style={styles.View_10078_2304}>
          <Text style={styles.Text_10078_2304}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10078_2475}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85256de2-5994-4042-9ef0-a86eb11ba32f"
            }}
            style={styles.ImageBackground_I10078_2475_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42bce708-154d-404d-982d-af9606859b55"
            }}
            style={styles.ImageBackground_I10078_2475_10078_2408}
          />
        </View>
      </View>
      <View style={styles.View_10078_2290}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bad74387-3c58-406c-83ed-ea28d386eb22"
          }}
          style={styles.ImageBackground_10078_2291}
        />
        <View style={styles.View_10078_2295}>
          <Text style={styles.Text_10078_2295}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10078_2470}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9572271d-c991-4a7c-a970-846e91179ded"
            }}
            style={styles.ImageBackground_I10078_2470_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e49716c2-7a88-4380-8784-8d7a62cc2500"
            }}
            style={styles.ImageBackground_I10078_2470_10078_2408}
          />
        </View>
      </View>
      <View style={styles.View_10078_2281}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33a0d0a9-a3a7-476a-9e29-23ed19586e65"
          }}
          style={styles.ImageBackground_10078_2282}
        />
        <View style={styles.View_10078_2286}>
          <Text style={styles.Text_10078_2286}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10078_2465}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4610a220-c45e-48c6-bf70-e24a7c049246"
            }}
            style={styles.ImageBackground_I10078_2465_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71240fc4-9861-4d56-9a05-bb1ba9350f89"
            }}
            style={styles.ImageBackground_I10078_2465_10078_2408}
          />
        </View>
      </View>
      <View style={styles.View_10169_1663}>
        <View style={styles.View_10078_2431}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cd0d2d4-4078-4097-ad4a-44be32a822cb"
            }}
            style={styles.ImageBackground_I10078_2431_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c511ea7f-49ed-4d5a-bcca-a419ed9f9242"
            }}
            style={styles.ImageBackground_I10078_2431_10078_2408}
          />
        </View>
        <View style={styles.View_10078_2272}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f61e361d-ae91-4de5-8ebd-8260e542551c"
            }}
            style={styles.ImageBackground_10078_2273}
          />
          <View style={styles.View_10078_2277}>
            <Text style={styles.Text_10078_2277}>Mobile Apps</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10169_1662}>
        <View style={styles.View_10078_2426}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32ba6b33-548e-4ad0-a04e-8fa250a8703a"
            }}
            style={styles.ImageBackground_I10078_2426_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2aeb7138-53c9-4264-a8ac-f60a3ceaf2e0"
            }}
            style={styles.ImageBackground_I10078_2426_10078_2408}
          />
        </View>
        <View style={styles.View_10078_2263}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/437d2240-4983-40c6-bfc8-f24adae823ed"
            }}
            style={styles.ImageBackground_10078_2264}
          />
          <View style={styles.View_10078_2268}>
            <Text style={styles.Text_10078_2268}>logo.png</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10169_1661}>
        <View style={styles.View_10078_2254}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23c43c82-7072-441a-82d3-f6d930db8281"
            }}
            style={styles.ImageBackground_10078_2255}
          />
          <View style={styles.View_10078_2259}>
            <Text style={styles.Text_10078_2259}>Mobile Apps</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0534f60-53b4-4520-b40e-c34a9abfd578"
          }}
          style={styles.ImageBackground_10078_2409}
        />
      </View>
      <View style={styles.View_10078_2245}>
        <View style={styles.View_10169_1660}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/125a18dd-9514-45a0-8c43-9464ef0967b9"
            }}
            style={styles.ImageBackground_10078_2246}
          />
          <View style={styles.View_10078_2250}>
            <Text style={styles.Text_10078_2250}>favicon.jpg</Text>
          </View>
          <View style={styles.View_10078_2404}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b00bf3bc-d22d-4c3e-a344-a147a2164863"
              }}
              style={styles.ImageBackground_10078_2405}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f81ce4d8-0f42-43ea-b92d-63623937b50b"
              }}
              style={styles.ImageBackground_10078_2408}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_10169_1658}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42c8c718-e2ad-4b97-832f-b06d0d3d58b4"
          }}
          style={styles.ImageBackground_10078_2385}
        />
        <View style={styles.View_10078_2236}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dd2ae5b-984c-4ea9-9dc6-7c39c54f9d98"
            }}
            style={styles.ImageBackground_10078_2237}
          />
          <View style={styles.View_10078_2241}>
            <Text style={styles.Text_10078_2241}>Mobile Apps</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10169_1657}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fef690fe-826e-498c-a43d-7e8659fc0be6"
          }}
          style={styles.ImageBackground_10078_2384}
        />
        <View style={styles.View_10078_2227}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/796c28e8-3134-4ca3-a265-2c81430f80e3"
            }}
            style={styles.ImageBackground_10078_2228}
          />
          <View style={styles.View_10078_2232}>
            <Text style={styles.Text_10078_2232}>Mobile Apps</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10169_1656}>
        <View style={styles.View_10078_2218}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1520242d-3246-4b32-a7e3-fb6ed83c2d9e"
            }}
            style={styles.ImageBackground_10078_2219}
          />
          <View style={styles.View_10078_2223}>
            <Text style={styles.Text_10078_2223}>meta-functions.php</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c031a1c7-0d8b-4028-a184-80eadf58da08"
          }}
          style={styles.ImageBackground_10078_2378}
        />
      </View>
      <View style={styles.View_10169_1655}>
        <View style={styles.View_10078_2209}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a277388d-13f1-4b02-b21a-e42464b80781"
            }}
            style={styles.ImageBackground_10078_2210}
          />
          <View style={styles.View_10078_2214}>
            <Text style={styles.Text_10078_2214}>styles.css</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39170da9-b844-45a5-8573-d18b457bbd22"
          }}
          style={styles.ImageBackground_10078_2372}
        />
      </View>
      <View style={styles.View_10169_1659}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3075cfab-2f7c-4620-b9b9-eb9196a9da5f"
          }}
          style={styles.ImageBackground_10078_2366}
        />
        <View style={styles.View_10078_2200}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f091022-ae5b-424a-9743-92e44b6fc51d"
            }}
            style={styles.ImageBackground_10078_2201}
          />
          <View style={styles.View_10078_2205}>
            <Text style={styles.Text_10078_2205}>functions.js</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10078_2191}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76c27c75-13b3-4d1e-af30-e538ee8a429a"
          }}
          style={styles.ImageBackground_10078_2192}
        />
        <View style={styles.View_10078_2196}>
          <Text style={styles.Text_10078_2196}>settings.php</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/897afcbb-2193-49ea-a2f5-a4354c1c556f"
          }}
          style={styles.ImageBackground_10078_2360}
        />
      </View>
      <View style={styles.View_10078_2182}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cee43c4d-debe-47cd-8623-ec617a68fe40"
          }}
          style={styles.ImageBackground_10078_2183}
        />
        <View style={styles.View_10078_2187}>
          <Text style={styles.Text_10078_2187}>Integrations</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74906d57-87a8-4a15-9d2b-4860a029b8dc"
          }}
          style={styles.ImageBackground_10078_2188}
        />
      </View>
      <View style={styles.View_10078_2173}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e04b86b9-24db-436f-be7f-3220b2e8a05d"
          }}
          style={styles.ImageBackground_10078_2174}
        />
        <View style={styles.View_10078_2178}>
          <Text style={styles.Text_10078_2178}>Componets</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb9c46df-4e12-4904-9897-0a3c3d304c78"
          }}
          style={styles.ImageBackground_10078_2179}
        />
      </View>
      <View style={styles.View_10078_2164}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8786bd4-b17e-464b-8a7c-704888e10eea"
          }}
          style={styles.ImageBackground_10078_2165}
        />
        <View style={styles.View_10078_2169}>
          <Text style={styles.Text_10078_2169}>Languages</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f24f0fa-5350-4d32-93cd-81696ee1eb63"
          }}
          style={styles.ImageBackground_10078_2170}
        />
      </View>
      <View style={styles.View_10078_2155}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f3d02f1-07ef-4a2c-8b6d-7ee8d482eadf"
          }}
          style={styles.ImageBackground_10078_2156}
        />
        <View style={styles.View_10078_2160}>
          <Text style={styles.Text_10078_2160}>Templates</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d594b60-905c-4e4c-851a-63eb4a9d57de"
          }}
          style={styles.ImageBackground_10078_2161}
        />
      </View>
      <View style={styles.View_10169_1673}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03bfc5e7-9aa2-4d0e-8822-db085da0e849"
          }}
          style={styles.ImageBackground_10169_1674}
        />
        <View style={styles.View_10169_1678}>
          <Text style={styles.Text_10169_1678}>Background</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2e26c39-0438-4fe7-a373-32d29a7898d8"
          }}
          style={styles.ImageBackground_10169_1679}
        />
      </View>
      <View style={styles.View_10078_1842}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee2903b7-888b-45d4-8d33-56b9bed7b903"
          }}
          style={styles.ImageBackground_10078_1844}
        />
        <View style={styles.View_10078_1848}>
          <Text style={styles.Text_10078_1848}>Assets</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5cebf1b-1270-404c-a631-acf38f6c3a91"
          }}
          style={styles.ImageBackground_10078_1850}
        />
      </View>
      <View style={styles.View_10169_1958}>
        <View style={styles.View_10078_2079}>
          <View style={styles.View_10078_2080}>
            <View style={styles.View_10078_2081} />
            <View style={styles.View_10078_2082} />
            <View style={styles.View_10078_2083} />
            <View style={styles.View_10078_2084} />
            <View style={styles.View_10078_2085} />
            <View style={styles.View_10078_2086} />
          </View>
        </View>
        <View style={styles.View_10169_1654}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6af178bd-a643-4765-8e72-8174c57e4adc"
            }}
            style={styles.ImageBackground_10078_2143}
          />
          <View style={styles.View_10078_2066}>
            <Text style={styles.Text_10078_2066}>Last Modified</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2722b1d-b130-40b6-90aa-83324988e122"
        }}
        style={styles.ImageBackground_10078_2077}
      />
      <View style={styles.View_10078_2087}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7956eb79-8b42-4213-83fc-046cbb5de142"
          }}
          style={styles.ImageBackground_10078_2088}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39c6fd7e-7673-4a86-bfdb-7b1fb118900d"
          }}
          style={styles.ImageBackground_10078_2089}
        />
      </View>
      <View style={styles.View_10169_1957}>
        <View style={styles.View_10169_1668}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8db6049-80b7-49b1-8fe1-9316e80059c4"
            }}
            style={styles.ImageBackground_10078_2139}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24394a86-18fa-45bb-8591-e826ab09f03a"
            }}
            style={styles.ImageBackground_10078_2137}
          />
        </View>
        <View style={styles.View_10078_1840}>
          <View style={styles.View_10078_1841}>
            <Text style={styles.Text_10078_1841}>Mobile Apps</Text>
          </View>
        </View>
        <View style={styles.View_10078_2130}>
          <View style={styles.View_10078_2132}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b734025-4f6f-4457-a06f-1229aba7a977"
              }}
              style={styles.ImageBackground_10078_2133}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 40, 86, 1)" },
  View_2: { height: hp("187%") },
  View_10169_1669: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("173%")
  },
  ImageBackground_10081_2178: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_10081_2185: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_10081_2186: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10081_2190: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10081_2190: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1670: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("173%")
  },
  ImageBackground_10081_2176: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_10081_2179: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_10081_2180: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10081_2184: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10081_2184: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1671: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("173%")
  },
  View_10081_2169: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_10081_2170: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10081_2174: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10081_2174: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10081_2177: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_10169_1672: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("173%")
  },
  View_10081_2163: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_10081_2164: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10081_2168: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10081_2168: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10081_2175: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_10169_1667: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("149%")
  },
  ImageBackground_10078_2439: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_10078_2344: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_10078_2345: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2349: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2349: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1666: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("149%")
  },
  ImageBackground_10078_2437: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_10078_2335: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_10078_2336: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2340: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2340: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1665: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("149%")
  },
  View_10078_2326: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_10078_2327: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2331: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2331: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2438: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_10169_1664: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("149%")
  },
  View_10078_2317: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_10078_2318: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2322: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2322: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2436: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_10078_2308: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("126%")
  },
  ImageBackground_10078_2309: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("16%")
  },
  View_10078_2313: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_10078_2313: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2488: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10078_2488_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10078_2488_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10078_2299: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("126%")
  },
  ImageBackground_10078_2300: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("16%")
  },
  View_10078_2304: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_10078_2304: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2475: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10078_2475_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10078_2475_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10078_2290: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("126%")
  },
  ImageBackground_10078_2291: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("16%")
  },
  View_10078_2295: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_10078_2295: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2470: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10078_2470_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10078_2470_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10078_2281: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("126%")
  },
  ImageBackground_10078_2282: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("16%")
  },
  View_10078_2286: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_10078_2286: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2465: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10078_2465_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10078_2465_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10169_1663: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("102%")
  },
  View_10078_2431: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10078_2431_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10078_2431_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10078_2272: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  ImageBackground_10078_2273: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2277: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2277: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1662: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("102%")
  },
  View_10078_2426: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10078_2426_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10078_2426_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10078_2263: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("15%")
  },
  ImageBackground_10078_2264: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_10078_2268: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2268: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1661: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("102%")
  },
  View_10078_2254: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  ImageBackground_10078_2255: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2259: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2259: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2409: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_10078_2245: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("102%")
  },
  View_10169_1660: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10078_2246: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("16%")
  },
  View_10078_2250: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_10078_2250: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2404: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10169_1658: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("79%")
  },
  ImageBackground_10078_2385: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_10078_2236: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  ImageBackground_10078_2237: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2241: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2241: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1657: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("79%")
  },
  ImageBackground_10078_2384: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_10078_2227: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  ImageBackground_10078_2228: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2232: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2232: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10169_1656: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("79%")
  },
  View_10078_2218: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  ImageBackground_10078_2219: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2223: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2223: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2378: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_10169_1655: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("79%")
  },
  View_10078_2209: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("15%")
  },
  ImageBackground_10078_2210: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_10078_2214: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2214: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2372: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10169_1659: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("55%")
  },
  ImageBackground_10078_2366: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10078_2200: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("15%")
  },
  ImageBackground_10078_2201: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_10078_2205: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2205: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2191: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("55%")
  },
  ImageBackground_10078_2192: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("16%")
  },
  View_10078_2196: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_10078_2196: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2360: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10078_2182: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("56%")
  },
  ImageBackground_10078_2183: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%")
  },
  View_10078_2187: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_2187: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2188: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_2173: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("56%")
  },
  ImageBackground_10078_2174: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%")
  },
  View_10078_2178: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_2178: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2179: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_2164: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("34%")
  },
  ImageBackground_10078_2165: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%")
  },
  View_10078_2169: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_2169: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2170: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_2155: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("34%")
  },
  ImageBackground_10078_2156: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%")
  },
  View_10078_2160: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_2160: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2161: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10169_1673: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("34%")
  },
  ImageBackground_10169_1674: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%")
  },
  View_10169_1678: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10169_1678: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10169_1679: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_1842: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("34%")
  },
  ImageBackground_10078_1844: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%")
  },
  View_10078_1848: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1848: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_1850: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10169_1958: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%")
  },
  View_10078_2079: {
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
  View_10078_2080: {
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
  View_10078_2081: {
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
  View_10078_2082: {
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
  View_10078_2083: {
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
  View_10078_2084: {
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
  View_10078_2085: {
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
  View_10078_2086: {
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
  View_10169_1654: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_10078_2143: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_10078_2066: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2066: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2077: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  View_10078_2087: {
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
  ImageBackground_10078_2088: {
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
  ImageBackground_10078_2089: {
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
  View_10169_1957: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%")
  },
  View_10169_1668: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%")
  },
  ImageBackground_10078_2139: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%")
  },
  ImageBackground_10078_2137: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10078_1840: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_10078_1841: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_1841: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2130: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_10078_2132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10078_2133: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
