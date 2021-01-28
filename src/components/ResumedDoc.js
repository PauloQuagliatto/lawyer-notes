import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'
import moment from 'moment'
import loraRegular from '../fonts/Lora-Regular.ttf'
import loraBold from '../fonts/Lora-Bold.ttf'

Font.register({ 
    family: 'Lora',
    format: "trueType",
    fonts: 
    [
        {
            src: loraRegular
        },
        {
            src: loraBold,
            fontWeight: 'bold'
        }
    ]
})

const styles = StyleSheet.create({
    contentContainer: {
        fontFamily: 'Lora',
        marginTop: 8,
        marginBottom:5,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "80%"
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 10,
        top: 8,
        left: 485,
        right: 0,
        textAlign: 'center'
    },
    titleContainer: {
        width: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderBottom: 1,
        borderColor: "#666666"
    },
    fullInformationContainer: {
        margin: 3,
        padding: 2,
        flexDirection: "column",
        alignItems: "center"
    },
    informationContainer: {
        width: 500,
        margin: 10,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    informationContent: {
        width: 300,
        display: "flex",
        flexDirection: "column"
    },
    title: {
        fontSize: 20,
        margin: 3
    },
    subTitle: {
        fontSize: 10,
        margin: 3
    },
    filterText: {
        fontSize: 12,
        margin: 5
    },
    textBoxConfig: {
        width: 180,
        padding: 1,
        marginBottom: 1,
        marginHorizontal: 3,
        display: 'flex',
        flexDirection: 'row'
    },
    textNormal: {
        fontSize: 11
    },
    textStrong: {
        fontSize: 11,
        fontWeight: 'bold'
    }
})

const ResumedDoc = (props) => (
    <Document>
        {props.notes.length === 0 ?
                <Page size="A4" style={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Escriótio Jurídico</Text>
                    <Text style={styles.subTitle}>Paulo Felix</Text>
                    <Text style={styles.filterText}>Relatório</Text>
                    <View><Text>Nada Selecionado.</Text></View>
                </View> 
                </Page> 
                : 
                <Page size="A4" style={styles.contentContainer}>
                <Text style={styles.pageNumber} render={({ pageNumber }) => (
                        `${pageNumber}`
                    )} fixed/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Escritório Jurídico</Text>
                        <Text style={styles.subTitle}>Paulo Felix</Text>
                        <Text style={styles.filterText}>
                            Relatório de {moment(props.notes[0].createdAt).format('DD/MM/YYYY')} à {moment(props.notes[props.notes.length-1].createdAt).format('DD/MM/YYYY')}
                        </Text>
                    </View>
                    <View>
                        {props.notes.map((note) => {
                                    return (
                                        <View style={styles.fullInformationContainer}key={note.id} {...note} wrap={false}>
                                            <View style={styles.informationContainer}>
                                                <View style={styles.informationContent}>
                                                    <View style={styles.textBoxConfig}>
                                                        <Text style={styles.textStrong}>Vara: </Text>
                                                        <Text style={styles.textNormal}>{note.vara}</Text>
                                                    </View>
                                                    <View style={styles.textBoxConfig}>
                                                        <Text style={styles.textStrong}>Processo: </Text>
                                                        <Text style={styles.textNormal}>{note.process}</Text>
                                                    </View>
                                                    <View style={styles.textBoxConfig}>
                                                            <Text style={styles.textStrong}>Cliente: </Text> 
                                                            <Text style={styles.textNormal}>{note.client}</Text>
                                                    </View>
                                                    <View style={styles.textBoxConfig}>
                                                            <Text style={styles.textStrong}>Providência: </Text> 
                                                            <Text style={styles.textNormal}>{note.providence}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.informationContent}>
                                                    <View style={styles.textBoxConfig}>
                                                        <Text style={styles.textStrong}>Ação: </Text>
                                                        <Text style={styles.textNormal}>{note.acao}</Text>
                                                    </View>
                                                    <View style={styles.textBoxConfig}>
                                                        <Text style={styles.textStrong}>Distribuição: </Text>
                                                        <Text style={styles.textNormal}>{moment(note.distribuition).format('DD/MM/YYYY')}</Text>
                                                    </View>
                                                    <View style={styles.textBoxConfig}>
                                                        <Text style={styles.textStrong}>Tel: </Text>
                                                        <Text style={styles.textNormal}>{note.phone}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        )
                                })}
                    </View>
                </Page>}
    </Document>
)

export { ResumedDoc as default }