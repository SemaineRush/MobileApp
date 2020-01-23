import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { width, BackgroundColors, height, Colors, Texts } from '../styles/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { PrimaryButton } from '../Common/Button';
import { VoteFooter } from '../Common/Footer'
import ConfirmVote from '../Alerts/ConfirmVote';

class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: -1,
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
            ],
            alertVisible: 0,
            viewRef: null
        };
    }

    hideAlert() {
        this.setState({ alertVisible: 0 });
    }

    validateVote() {
        let candidate = this.state.candidates[this.state.checked]
        this.setState({ alertVisible: 0 }, () => this.setState({ alertVisible: 1 }));
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                {this.state.alertVisible === 1 && <ConfirmVote visible={true} hideAlert={() => this.hideAlert()} validateVote={() => this.validateVote()} candidate={this.state.candidates[this.state.checked].firstname + " " + this.state.candidates[this.state.checked].lastname} />}
                <View style={{minHeight: height, position: 'relative'}}>
                    <TouchableOpacity style={styles.back} color={Colors.black.color} onPress={() => navigate('CandidatesList')}>
                        <Text style={Texts.h1}>{"<"}</Text>
                    </TouchableOpacity>
                    <View style={ styles.header }>
                        <Text style={ [styles.mainTitle, Texts.h1] }>À votre vote</Text>
                        <Text style={ [styles.subtitle, Texts.p] }>Seléctionnez votre candidat parmi les différents votes possibles ci-dessous :</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.bodyContainer}>
                            {this.state.candidates.map((user, index) => {
                                return <TouchableOpacity key={user.id} style={styles.candidate} onPress={() => this.setState({checked: index})}>
                                    <Image source={{uri: user.picture}} style={styles.candidateImg}/>
                                    <Text style={[Texts.h1, styles.name]}>{user.firstname} {user.lastname.toUpperCase()}</Text>
                                    <View style={this.state.checked === index ? [styles.checkbox, styles.checked] : [styles.checkbox, styles.unchecked] }></View>
                                </TouchableOpacity>
                            }) }
                        </View>
                    </ScrollView>
                    <VoteFooter style={styles.footer} />
                    <PrimaryButton title="Voter" style={[styles.vote, BackgroundColors.blue]} onPress={() => this.setState({ alertVisible: 1 })} disabled={this.state.checked === -1}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        position: 'absolute',
        left: width * 0.05,
        top: 30,
    },
    header: {
        marginTop: 120,
        width: width * 0.9,
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
        paddingRight: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.07,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
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
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: Colors.grey.color,
        paddingLeft: 10,
    },
    unchecked: {
        backgroundColor: '#fff',
    },
    checked: {
        backgroundColor: BackgroundColors.blue.backgroundColor,
    },
    footer: {
        width: width * 0.9,
        position: 'absolute',
        bottom: 120,
        left: width * 0.05
    },
})

export default Vote;