import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { width, BackgroundColors, height, Colors, Texts } from '../styles/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { PrimaryButton } from '../Common/Button';
import { CheckBox } from 'react-native-elements';

class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: 0,
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
                <View style={{minHeight: height, position: 'relative'}}>
                    <TouchableOpacity style={styles.back} color={Colors.grey} onPress={() => navigate('CandidatesList')}>
                        <Text style={{fontWeight: 'bold', fontSize: 23}}>{"<"}</Text>
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <Text style={[styles.mainTitle, Texts.h1]}>À votre vote</Text>
                        <Text style={[styles.subtitle, Texts.p]}>Seléctionnez votre candidat parmi les différents votes possibles ci-dessous :</Text>
                    </View>
                    <View style={styles.bodyContainer}>
                        {this.state.candidates.map(user => {
                            return <TouchableOpacity key={user.id} style={styles.candidate} onPress={() => this.setState({checked: user.id})}>
                                <Image source={{uri: user.picture}} style={styles.candidateImg}/>
                                <Text style={[Texts.h1, styles.name]}>{user.firstname} {user.lastname.toUpperCase()}</Text>
                                <CheckBox
                                    right
                                    iconRight
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={this.state.checked === user.id}
                                    size={30}
                                    onPress={() => this.setState({checked: user.id})}
                                    checkedColor={BackgroundColors.blue.backgroundColor}
                                />
                            </TouchableOpacity>
                        })}
                    </View>
                    <PrimaryButton title="Voter" style={[styles.vote, BackgroundColors.blue]}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        position: 'absolute',
        left: width*0.05,
        top: 30,
    },
    header: {
        marginTop: 120,
        width: width*0.9,
        marginLeft: width * 0.05,
    },
    mainTitle: {
        marginBottom: 10
    },
    subtitle: {
        marginBottom: 15,
    },
    candidate: {
        height: 60,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: width * 0.9,
        marginLeft: width * 0.05,
        backgroundColor: '#fff',
        marginTop: 10,
        paddingLeft: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.07,
        shadowRadius: 50,
        shadowOffset: {
            width: 2,
            height: 2,
        },
    },
    candidateImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        zIndex: 10
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#444444"
    },
    vote: {
        position: 'absolute',
        bottom: 50,
        left: 15,
        marginTop: 50,
    }
})

export default Vote;