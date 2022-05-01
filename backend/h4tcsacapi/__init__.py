def form_attributes(placeholder=""):
    return {
        'class': "form-control form-control-md",
        'placeholder': placeholder
    }


def checkbox_attributes(placeholder=""):
    return {
        'class': "form-check-input form-control-md",
        # 'style': 'max-width: 500px;',
        'placeholder': placeholder
    }


def date_attributes(placeholder=""):
    return {
        'class': "form-control-md",
        # 'style': 'max-width: 500px;',
        'placeholder': placeholder,
        'type': "date"
    }
