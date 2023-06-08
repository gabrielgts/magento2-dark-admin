let config = {
    paths:{
        'darkmode-js':'Gtstudio_DarkAdmin/js/lib/darkmode-js',
        'dark-admin': 'Gtstudio_DarkAdmin/js/dark-admin'
    },
    shim:{
        'dark-admin':{
            'deps':['darkmode-js']
        }
    }};