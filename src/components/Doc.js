import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import moment from 'moment'


const styles = StyleSheet.create({
    contentContainer: {
        margin: 10,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "80%"
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
        margin: 2,
        padding: 3,
        flexDirection: "column",
        alignItems: "center"
    },
    informationContainer: {
        width: 500,
        margin: 3,
        padding: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    informationContent: {
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
    textConfig: {
        padding: 1,
        margin: 1,
        fontSize: 12
    }
})

const Doc = (props) => (
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
                                                    <Text style={styles.textConfig}>Vara: {note.vara}</Text>
                                                    <Text style={styles.textConfig}>Processo: {note.process}</Text>
                                                    <Text style={styles.textConfig}>Cliente: {note.client}</Text>
                                                    <Text style={styles.textConfig}>Providência: {note.providence}</Text>
                                                    </View>
                                                <View style={styles.informationContent}>
                                                    <Text style={styles.textConfig}>Ação: {note.acao}</Text>
                                                    <Text style={styles.textConfig}>Distribuição: {moment(note.distribuition).format('DD/MM/YYYY')}</Text>
                                                    <Text style={styles.textConfig}>Tel: {note.phone}</Text>
                                                    <Text style={styles.textConfig}>Endereço: {note.address}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        )
                                })}
                    </View>
                </Page>}
    </Document>
)

export { Doc as default }