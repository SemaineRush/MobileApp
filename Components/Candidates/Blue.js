import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Texts, BackgroundColors, Colors } from '../styles/blueStyles';
import { width } from '../styles/Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinkButton } from '../Common/Button';

class BlueCandidate extends React.Component {
    render() {
        return (
            <ScrollView>
                <TouchableOpacity style={ styles.back } color={ Colors.white.color } onPress={ () => this.props.goBack() }>
                    <Icon name="chevron-left" color={ BackgroundColors.white.backgroundColor } size={ 30 } />
                </TouchableOpacity>
                <View style={ [BackgroundColors.blue, { height: 350 }] }>
                    <Text style={ [Colors.white, Texts.h1, { marginLeft: 30, marginTop: 80 }] }>Guiral Lapouge</Text>
                    <Text style={ [Colors.white, Texts.h4, { marginLeft: 30, marginTop: 10 }] }>“Des idées d’aujourd’hui naissent les projets de demain”</Text>
                    <View style={ [BackgroundColors.white, styles.subtitle] }>
                        <Text style={ [Texts.h3, styles.subtitleText] }>Esse sunt qui est quis et qui. Deserunt aliquip id amet anim magna eu ad incididunt consequat.</Text>
                    </View>
                </View>
                <View style={ [BackgroundColors.darkBlue, styles.program] }>
                    <Image source={require('../../assets/SUP2020.png')} style={styles.sup2020} />
                    <Text style={ [Texts.h1, Colors.white] }>LE PROGRAMME</Text>
                    <View style={ [styles.redBar, BackgroundColors.red] }></View>
                    <Text style={ [Texts.info, Colors.white, { opacity: 0.5, marginBottom: 25 }] }>Notre promesse de campagne</Text>
                    <View>
                        <Text style={ [Texts.p, Colors.white] }>
                            Vous avez une idée géniale ? Vous pensez que c’est l’avenir du marché ?
                            Nous vous mettrons à disposition <Text style={ [Texts.pBold, Colors.white] }>des intervenants </Text>
                            pour discuter de vos projets d’avenir.
                        </Text>
                        <Text style={ [Texts.p, Colors.white, { marginTop: 20 }] }>
                            Comment financer ces projets ? Nous permettrons d’avoir accès à
                            <Text style={ [Texts.pBold, Colors.white] }> des fonds communs qui vous </Text>
                            aiderons tout au long de vos projets.
                        </Text>
                        <Text style={ [Texts.p, Colors.white, { marginTop: 20 }] }>
                            Devenir entrepreneur est quelque chose qui vous parle ? Mais vous avez peur de vous lancer ?
                            Nous mettons en place
                            <Text style={ [Texts.pBold, Colors.white] }> une équipe d'entrepreneurs pour vous aider.</Text>
                        </Text>
                        <Text style={ [Texts.p, Colors.white, { marginTop: 20 }] }>
                            Pour vous amis entrepreneurs, nous vous mettrons en relation avec les meilleurs.
                            Mais qui sont les meilleurs me direz vous ? Nous allons créer
                            <Text style={ [Texts.pBold, Colors.white] }> un groupe Facebook et Linkedin </Text>
                            sur lequel des professionnels proposeront directement des missions.
                        </Text>
                        <Text style={ [Texts.p, Colors.white, { marginTop: 20 }] }>
                            Marre de vous demandez « on mange où ce midi » ?
                            <Text style={ [Texts.pBold, Colors.white] }> Une restauration dans votre ville. </Text>
                        </Text>
                        <Text style={ [Texts.p, Colors.white, { marginTop: 20 }] }>
                            Nous agrandirons votre <Text style={ [Texts.pBold, Colors.white] }> terrasse </Text>
                            avec un plus <Text style={ [Texts.pBold, Colors.white] }> grand jardin </Text>
                            pour pouvoir profiter au mieux de vos temps libre.
                        </Text>
                        <Text style={ [Texts.p, Colors.white, { marginTop: 20 }] }>
                            Nous aménagerons <Text style={ [Texts.pBold, Colors.white] }> une salle </Text>
                            qui sera dédiée au <Text style={ [Texts.pBold, Colors.white] }> sport.</Text>
                        </Text>
                        <Text style={ [Texts.p, Colors.white, { marginTop: 20 }] }>
                            Vous voulez <Text style={ [Texts.pBold, Colors.white] }> des bonbons ? </Text>
                            Il y aura bien plus que ça !
                        </Text>
                        <Text style={ [Texts.p, Colors.white, { marginTop: 20 }] }>
                            ... et plus encore.
                        </Text>
                    </View>
                </View>
                <Image source={ require('../../assets/guiral.png') } style={ { width: width, height: width * 1.25 } } />
                <View style={ [BackgroundColors.white, styles.program] }>
                    <Text style={ [Texts.h1, Colors.darkBlue] }>LE PROGRAMME</Text>
                    <View style={ [styles.redBar, BackgroundColors.red] }></View>
                    <View>
                        <Text style={ [Texts.p, Colors.darkBlue] }>
                            <Text style={ [Texts.pBold, Colors.darkBlue] }>Guiral</Text>, un jeune homme issu de quartiers défavorisés a dû apprendre très tôt à se débrouiller
                            seul et avancer par lui-même. Très peu de personnes ont cru en lui et le destinait à rester en bas
                            de l’échelle. Personne ne voyait en lui un avenir. <Text style={ [Texts.pBold, Colors.darkBlue] }>Seul</Text> lui se faisait confiance c’est pourquoi il a
                            persisté et beaucoup travaillé.
                        </Text>
                        <Text style={ [Texts.p, Colors.darkBlue] }>
                            Grâce à sa <Text style={ [Texts.pBold, Colors.darkBlue] }>motivation</Text>, sa <Text style={ [Texts.pBold, Colors.darkBlue] }>persévérance</Text> et son caractère de conquérant,
                            il a toujours effectué ses propres <Text style={ [Texts.pBold, Colors.darkBlue] }>choix</Text> et a suivi ses <Text style={ [Texts.pBold, Colors.darkBlue] }>intuitions</Text> pour mener à bien tous ses <Text style={ [Texts.pBold, Colors.darkBlue] }>projets</Text>,
                            ce qui lui vaut aujourd’hui son parcours et sa candidature à l’élection municipale de SUP 2020.
                            Ses idées de campagne, il les tient de ses études supérieures desquelles il a été diplômé.
                            Grâce à elles, il a pu <Text style={ [Texts.pBold, Colors.darkBlue] }>créer sa propre structure</Text> qui permet de mettre en relation des entrepreneurs
                            avec des entreprises.
                        </Text>
                    </View>
                </View>
                <View style={ [BackgroundColors.red, { paddingLeft: 30, paddingTop: 40, paddingBottom: 20 }] }>
                    <Text style={ [Texts.h1, Colors.white, { fontSize: 25, width: width * 0.6 }] }>Sa motivation, sa persévérence et son caractère de conquérant.</Text>
                </View>
                <Image source={ require('../../assets/guiralProgram.png') } style={ { width: width, height: width * 0.8 } } />
                <View style={ [BackgroundColors.white, styles.program, { paddingLeft: 0 }] }>
                    <Text style={ [Texts.h1, Colors.darkBlue, { marginLeft: 30 }] }>LE PROGRAMME</Text>
                    <View style={ [styles.redBar, BackgroundColors.red, { marginLeft: 30 }] }></View>
                    <View style={ styles.article }>
                        <Image source={ require('../../assets/guiralArticle1.png') } style={ { width: 90, height: 90, borderRadius: 3 } } />
                        <View style={ { width: width * 0.6 } }>
                            <Text style={ [Texts.h2, Colors.darkBlue, { fontSize: 17 }] }>CAMPAGNE ÉLÉCTORALE 2020</Text>
                            <Text style={ [Texts.info, Colors.darkBlue, { opacity: 0.4, fontSize: 13 }] }>Lancement de la campagne éléctorale pour les municipales</Text>
                        </View>
                        <Icon name="chevron-right" style={ { alignSelf: "flex-end" } } color={ BackgroundColors.darkBlue.backgroundColor } size={ 30 } />
                    </View>
                    <View style={ styles.article }>
                        <Image source={ require('../../assets/guiralArticle2.png') } style={ { width: 90, height: 90, borderRadius: 3 } } />
                        <View style={ { width: width * 0.6 } }>
                            <Text style={ [Texts.h2, Colors.darkBlue, { fontSize: 17 }] }>CAMPAGNE ÉLÉCTORALE 2020</Text>
                            <Text style={ [Texts.info, Colors.darkBlue, { opacity: 0.4, fontSize: 13 }] }>Lancement de la campagne éléctorale pour les municipales</Text>
                        </View>
                        <Icon name="chevron-right" style={ { alignSelf: "flex-end" } } color={ BackgroundColors.darkBlue.backgroundColor } size={ 30 } />
                    </View>
                    <LinkButton title="Tout voir" style={ { marginLeft: width * 0.7, marginTop: 30 } } />
                </View>
                <Image source={ require('../../assets/guiralMap.png') } style={ { width: width, height: width } } />
                <Image source={ require('../../assets/guiralInterview.png') } style={ { width: width, height: width * 0.52 } } />
                <View style={ [BackgroundColors.blue, styles.campaign] }>
                    <Text style={ [Texts.h1, Colors.white] }>Suivez notre campagne</Text>
                    <View style={ styles.social }>
                        <Image source={ require("../../assets/youtube.png") } style={ { width: 50, height: 35 } } />
                        <Image source={ require("../../assets/facebook.png") } style={ { width: 25, height: 45 } } />
                        <Image source={ require("../../assets/twitter.png") } style={ { width: 50, height: 40 } } />
                        <Image source={ require("../../assets/instagram.png") } style={ { width: 40, height: 40 } } />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        position: "absolute",
        left: 30,
        top: 40,
        zIndex: 20,
    },
    subtitle: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: width,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 30,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    subtitleText: {
        textAlign: "center",
        width: width * 0.8,
    },
    sup2020: {
        width: 30,
        height: 200,
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 20,
    },
    program: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 50,
        paddingBottom: 50,
        position: "relative"
    },
    redBar: {
        width: 50,
        height: 5,
        marginTop: 10,
        marginBottom: 10
    },
    article: {
        width: width,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.lightPurple.color,
        paddingTop: 20,
        paddingBottom: 20,
    },
    campaign: {
        paddingTop: 40,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30,
    },
    social: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
    }
})

export default BlueCandidate;