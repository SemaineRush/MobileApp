import React from 'react';
import { View, Text, StyleSheet, Modal, Alert } from 'react-native';
import { Texts, height, width, BackgroundColors } from '../styles/Styles';
import { PrimaryButton } from '../Common/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { api, getToken } from '../helpers/api'

class ConfirmVote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNextAlert: false,
            date: "21/01/2020"
        }
    }

    vote() {
        getToken().then(token => {
            api.get('/election_current', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(json => {
                let electionId = json.data.response.last_election.id
                api.post(`/vote/${electionId}/${this.props.candidateId}`, {}, {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                })
                .then(res => this.setState({ showNextAlert: true }))
                .catch(err => {console.log(err.response); Alert.alert("Erreur", "Vous avez déjà voté", {text: 'OK', onPress: () => this.props.navigation.navigate("Vote")})})
            }).catch((err) => {
                console.log(err)
            })
        })
    }

    render() {
        return (
            <View style={ styles.blurred }>
                <Modal visible={ this.props.visible } transparent={ true } animationType={ "fade" } >
                    { !this.state.showNextAlert ?
                        <View style={ styles.modal }>
                            <Text style={ Texts.p }>Vous allez voter pour</Text>
                            <Text style={ [Texts.h1, { color: BackgroundColors.blue.backgroundColor, marginTop: 30 }] }>{ this.props.candidate }</Text>
                            <View style={ styles.buttons }>
                                <TouchableOpacity onPress={ () => this.props.hideAlert() }>
                                    <Text style={ Texts.info }>Annuler</Text>
                                </TouchableOpacity>
                                <PrimaryButton title="Valider" style={ { width: 100 } } onPress={ () => this.vote() } />
                            </View>
                        </View>
                        : <View style={ finishedVoteStyles.modal }>
                            <View style={ finishedVoteStyles.iconTop }>
                                <Icon name="check" color={ BackgroundColors.blue.backgroundColor } size={ 30 } />
                            </View>
                            <Text style={ [Texts.p, { marginTop: 30 }] }>Vous avez voté pour</Text>
                            <Text style={ [Texts.h1, { color: BackgroundColors.blue.backgroundColor, marginTop: 30 }] }>{ this.props.candidate }</Text>
                            <View style={ finishedVoteStyles.separator } />
                            <Text style={ [Texts.p, { textAlign: "center" }] }>Les résultats des élections seront disponibles le :</Text>
                            <Text style={ [Texts.h3, { marginBottom: 20, marginTop: 20 }] }>{ this.state.date }</Text>
                            <PrimaryButton title="Ok" style={ { width: width * 0.75, marginTop: 40, marginBottom: 20 } } onPress={ () => this.props.hideAlert() } />
                        </View>
                    }
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    blurred: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: height,
        width: width,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00000099",
        zIndex: 10
    },
    modal: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        zIndex: 12,
        marginTop: height / 2 - 150,
        width: width * 0.8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        borderRadius: 10,
        paddingTop: 20,
    },
    buttons: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: width * 0.8,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20,
    }
})

const finishedVoteStyles = StyleSheet.create({
    modal: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        zIndex: 12,
        marginTop: height / 2 - 200,
        width: width * 0.8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        borderRadius: 10,
    },
    iconTop: {
        width: 40,
        height: 40,
        borderBottomColor: BackgroundColors.blue.backgroundColor,
        borderBottomWidth: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        marginTop: 20,
    },
    separator: {
        width: width * 0.75,
        height: 1,
        backgroundColor: "#DDD",
        marginTop: 20,
        marginBottom: 20,
    },
})

export default ConfirmVote;