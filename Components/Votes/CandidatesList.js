import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { width, BackgroundColors, height } from '../Styles/Styles';
import { RoundPurpleBG } from '../Common/Headers';
import { ScrollView } from 'react-native-gesture-handler';
import { PrimaryButton } from '../Common/Button';

class CandidatesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [
                {
                    id: 1,
                    firstname: "Clémence",
                    lastname: "Chevalier",
                    picture: "https://d2ck0sxsjau14o.cloudfront.net/wp-content/uploads/2018/10/young-attractive-woman.jpg",
                    color: "#555",
                    title: "Le monde est à nous !",
                },
                {
                    id: 2,
                    firstname: "Andréa",
                    lastname: "Ngamouyi",
                    picture: "http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/Will-Smith-ne-veut-pas-faire-Men-in-Black-4.jpg",
                    color: "#BBB",
                    title: "Suis-moi, je te fuis !",
                }
            ]
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <RoundPurpleBG />
                <View style={ { minHeight: height } }>
                    <View style={ styles.headerContainer }>
                        <Text style={ styles.title }>Élections de SUP'Internet</Text>
                        <Text style={ styles.subtitle }>BDE 2020</Text>
                    </View>
                    <View style={ styles.bodyContainer }>
                        { this.state.candidates.map(user => {
                            return <View key={ user.id } style={ [styles.candidate, { backgroundColor: user.color }] }>
                                <View style={ { paddingTop: 20 } }>
                                    <Text style={ { color: 'white', fontWeight: 'bold' } }>{ user.firstname } { user.lastname.toUpperCase() }</Text>
                                    <Text style={ { color: 'white' } }>{ user.title }</Text>
                                </View>
                                <Image source={ { uri: user.picture } } style={ { width: (width * 0.8) / 2, height: 150, alignSelf: 'flex-end' } } />
                            </View>
                        }) }
                    </View>
                    <PrimaryButton title="Voter" onPress={ () => navigate('Vote') } style={ [BackgroundColors.blue, styles.vote] } />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingLeft: 40,
        marginTop: 40,
    },
    title: {
        width: width,
        color: '#fff',
        fontWeight: '700',
        fontSize: 20
    },
    subtitle: {
        color: '#fff',
        marginTop: 10,
        fontSize: 20,
        width: width / 2,
    },
    searchBar: {
        backgroundColor: 'transparent',
        width: width / 2,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    bodyContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    candidate: {
        width: width * 0.8,
        height: 170,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginTop: 30,
        paddingLeft: 10,
    },
    button: {
        marginTop: 50,
    },
    vote: {
        position: 'absolute',
        bottom: 50,
        left: 15,
        marginTop: 50,
    }
})

export default CandidatesList;