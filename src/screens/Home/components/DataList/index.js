import React, { useCallback } from 'react';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';
import useDataList from './hooks/useDataList';


function DataList(props) {

    const {
        service,
        keyName,
        params,
        component: Component,
        ...rest
    } = props || {};

    const {
        keyExtractor,
        data,
        refreshing,
        loading,
        error,
        onRefresh
    } = useDataList({
        service,
        keyName,
        params
    });

    const renderItem = useCallback((props) => {

        return (
            <Component {...props}/>
        );
    }, [Component]);

    return (
        //style item data
        <FlatList 
            style={styles.container}
            {...rest}
            data={data}
            refreshControl={
                <RefreshControl
                  refreshing = {refreshing}
                  onRefresh = {onRefresh}
                />
            }
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onEndReachedThreshold={0.5}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default DataList;