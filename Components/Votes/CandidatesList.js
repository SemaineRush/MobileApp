import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { width, BackgroundColors, height } from '../styles/Styles';
import { RoundPurpleBG } from '../Common/Headers';
import { ScrollView } from 'react-native-gesture-handler';
import { PrimaryButton } from '../Common/Button';
import { api, getToken } from '../helpers/api';

const getCandidates = setCandidates => {
    getToken().then(token => {
        api.get('/election_current', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(json => {
            api.get(`/elections/${json.data.response.last_election.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                setCandidates(res.data.candidateElection)
            })
        }).catch((err) => {
            console.log(err)
        })
    })
}

const CandidatesList = props => {
    const [candidates, setCandidates] = useState([]);
    const { navigate } = props.navigation;

    useEffect(() => {
        getCandidates(setCandidates)
        console.log(candidates)
    }, [])

    return <ScrollView>
        <RoundPurpleBG />
        <View style={ { minHeight: height } }>
            <View style={ styles.headerContainer }>
                <Text style={ styles.title }>Élections de SUP'Internet</Text>
                <Text style={ styles.subtitle }>BDE 2020</Text>
            </View>
            <View style={ styles.bodyContainer }>
                { candidates.map(candidate => {
                    return <TouchableOpacity key={ candidate.id } style={ [styles.candidate, { backgroundColor: candidate.informations.color }] } onPress={ () => navigate('Candidate', { candidatePage: candidate.informations.component_candidate_mobile }) }>
                        <View style={ { paddingTop: 20, width: '60%' } }>
                            <Text style={ { color: 'white', fontWeight: 'bold' } }>{ candidate.informations.firstname } { candidate.informations.lastname.toUpperCase() }</Text>
                            <Text style={ { color: 'white' } }>{ candidate.informations.slogan }</Text>
                        </View>
                        <Image source={ { uri: candidate.informations.image_url } } style={ { width: (width * 0.8) / 2.7, height: 150, alignSelf: 'flex-end' } } />
                    </TouchableOpacity>
                }) }
            </View>
            <PrimaryButton title="Voter" onPress={ () => navigate('Vote') } style={ [BackgroundColors.blue, styles.vote] } />
        </View>
    </ScrollView>
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