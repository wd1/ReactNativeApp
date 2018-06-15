import React from 'react';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Card from '../../Card/Card';
import CardSection from '../../Card/CardSection';
import styles from './styles';

const ArticleContent = ({ articleData }) => {
  const {
    nid,
    title,
    post_date,
    image_thumbnail,
    authored_by,
    main_content,
  } = articleData;

  return (
    <TouchableOpacity
      onPress={() => {
        Actions.ArticlePage({
          nid,
          title,
          post_date,
          image_thumbnail,
          authored_by,
          main_content,
        });
      }}
    >
      <Card>
        <CardSection>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: image_thumbnail.src }}
          />
        </CardSection>
        <CardSection>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{title}</Text>
            <View style={styles.textContentStyle}>
              <Text style={styles.textAuthorStyle}>By {authored_by}</Text>
              <Text style={styles.textDateStyle}>{post_date}</Text>
            </View>
          </View>
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

export default ArticleContent;
