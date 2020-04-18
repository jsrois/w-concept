import $ from "jquery";
import "./styles.scss";
import {Map} from "typescript";

class Organization {
    get email(): String {
        return this._email;
    }

    get name(): String {
        return this._name;
    }

    private readonly _name: String;
    private readonly _email: String;

    constructor(name: String, email: String) {
        this._name = name;
        this._email = email;
    }
}

class CountryInfo {
    get organizations(): Organization[] {
        return this._organizations;
    }

    get name(): String {
        return this._name;
    }

    private readonly _name: String;
    private readonly _organizations: Organization[];

    constructor(name: String, organizations: Organization[]) {
        this._name = name;
        this._organizations = organizations;
    }
}

let network = new Map<String, CountryInfo>();


function initializeNetworkData() {
    network = network.set("ES", new CountryInfo("Spain", [
        new Organization("Sindicato de Inquilinos de Gran Canaria", "some@example.com")
    ]))
        .set("US", new CountryInfo("United States", [
            new Organization("ATUN", "some@example.com")
        ]))
        .set("NZ", new CountryInfo("New Zealand", [
            new Organization("Rent Strike Aotearoa/New Zealand", "some@example.com")
        ]))
        .set("GB", new CountryInfo("United Kingdom", [
            new Organization("London Renters Union", "some@example.com")
        ]));
}

$(function () {
    initializeNetworkData()
    for (const key in network.keys()) {
        console.log(`Adding key for ${key}`);
        $(`svg path#${key}`).addClass("participant");
    }
});

const infoMenu = $('#info-menu');
$('path.participant').on('click', function () {
    const countryId = $(this).attr("id");
    if (countryId) {
        const countryInfo = network.get(countryId)!!;
        infoMenu.empty().append(`
            <div class="countryInfo">
                <p class="title">${countryInfo.name}</p>
                <p>
                  ${countryInfo.organizations.map(organization =>
            `<li><div>${organization.name}<div>
                     <div>${organization.email}</div></li>`)
        } 
                </p>
            <div> 
        `);
    }
    console.log(`clicked on ${countryId}`);
    infoMenu.toggleClass("hidden");
});