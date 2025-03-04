import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';

export default function PdfViewer({ route }) {
  const { pdfBase64 } = route.params;  // Get the PDF URI passed from EducationalMaterials
  const [pdfUri, setpdfUri] = useState(null);

  useEffect(() => {
    const savePdf = async () => {
      if (pdfBase64) {
        try {
          //create a temporary file in Expo Cache
          const fileUri = `${FileSystem.cacheDirectory}temp.pdf`;

          // Saving the Base64 PDF as a file so that the viewer can render it
          await FileSystem.writeAsStringAsync(fileUri, pdfBase64, {
            encoding: FileSystem.EncodingType.Base64,
          });

          setpdfUri(fileUri);  // Update state with the file path
        } catch (error) {
          console.error("Error saving PDF:", error);
          Alert.alert("Failed to load PDF");
        }
      }
    };

    savePdf();
  }, [pdfBase64]);

  
  if(!pdfUri)
  {
    return(
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
    
  }

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ uri: pdfUri }}  //Set the URI to be rendered in the webview
        style={styles.pdf}
        onError={(error) => console.log("PDF load error:", error)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
