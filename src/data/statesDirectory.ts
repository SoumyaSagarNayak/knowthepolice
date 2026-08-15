export interface StateAuthority {
  state: string;
  pca: {
    name: string;
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  acb: {
    name: string;
    phone: string;
    website: string;
  };
  shrc: {
    name: string;
    phone: string;
    website: string;
  };
  dlsaPhone: string;
}

export const STATES_DIRECTORY: StateAuthority[] = [
  {
    state: 'Delhi (NCT)',
    pca: {
      name: 'Police Complaints Authority Delhi',
      phone: '011-23813322',
      email: 'pca.delhi@gov.in',
      website: 'https://pca.delhigovt.nic.in',
      address: 'R.K. Puram Sector 1, New Delhi 110066'
    },
    acb: {
      name: 'Anti Corruption Branch Delhi',
      phone: '1064 / 011-23813018',
      website: 'https://acb.delhigovt.nic.in'
    },
    shrc: {
      name: 'Delhi State Human Rights Commission (NHRC)',
      phone: '011-24651330',
      website: 'https://nhrc.nic.in'
    },
    dlsaPhone: '15100 / 011-23384781'
  },
  {
    state: 'Maharashtra',
    pca: {
      name: 'State Police Complaints Authority Maharashtra',
      phone: '022-22822002',
      email: 'spca-mah@gov.in',
      website: 'https://spca.maharashtra.gov.in',
      address: 'Cooperage Telephone Exchange Bldg, Nariman Point, Mumbai 400021'
    },
    acb: {
      name: 'Anti Corruption Bureau Maharashtra',
      phone: '1064 / 022-22021757',
      website: 'https://acbmaharashtra.gov.in'
    },
    shrc: {
      name: 'Maharashtra State Human Rights Commission',
      phone: '022-22092807',
      website: 'https://mshrc.maharashtra.gov.in'
    },
    dlsaPhone: '15100 / 022-22691500'
  },
  {
    state: 'Karnataka',
    pca: {
      name: 'Karnataka State Police Complaints Authority',
      phone: '080-22340578',
      email: 'spca-kar@nic.in',
      website: 'https://ksp.karnataka.gov.in',
      address: 'Vikasa Soudha, Bengaluru 560001'
    },
    acb: {
      name: 'Karnataka Lokayukta / Corruption Helpline',
      phone: '1064 / 080-22375001',
      website: 'https://lokayukta.kar.nic.in'
    },
    shrc: {
      name: 'Karnataka State Human Rights Commission',
      phone: '080-22392200',
      website: 'https://kshrc.karnataka.gov.in'
    },
    dlsaPhone: '15100 / 080-22111714'
  },
  {
    state: 'Uttar Pradesh',
    pca: {
      name: 'UP State Police Complaints Authority',
      phone: '0522-2287234',
      email: 'spca-up@nic.in',
      website: 'https://uppolice.gov.in',
      address: 'Police Headquarters, Signature Building, Gomti Nagar, Lucknow 226002'
    },
    acb: {
      name: 'UP Anti Corruption Organization (ACO)',
      phone: '1064 / 0522-2307584',
      website: 'https://upaco.uppolice.gov.in'
    },
    shrc: {
      name: 'UP State Human Rights Commission',
      phone: '0522-2307525',
      website: 'https://upshrc.up.nic.in'
    },
    dlsaPhone: '15100 / 0522-2286395'
  },
  {
    state: 'Tamil Nadu',
    pca: {
      name: 'Tamil Nadu State Police Complaints Authority',
      phone: '044-28447700',
      email: 'spca-tn@gov.in',
      website: 'https://eservices.tnpolice.gov.in',
      address: 'Director General of Police Office, Mylapore, Chennai 600004'
    },
    acb: {
      name: 'Directorate of Vigilance and Anti-Corruption TN',
      phone: '1064 / 044-22310989',
      website: 'https://dvac.tn.gov.in'
    },
    shrc: {
      name: 'State Human Rights Commission Tamil Nadu',
      phone: '044-22501000',
      website: 'https://shrc.tn.gov.in'
    },
    dlsaPhone: '15100 / 044-25342441'
  },
  {
    state: 'West Bengal',
    pca: {
      name: 'West Bengal State Police Complaints Authority',
      phone: '033-22145000',
      email: 'spca-wb@gov.in',
      website: 'https://westbengalpolice.gov.in',
      address: 'Bhabani Bhawan, Alipore, Kolkata 700027'
    },
    acb: {
      name: 'Anti Corruption Branch West Bengal',
      phone: '1064 / 033-22144000',
      website: 'https://acb.wb.gov.in'
    },
    shrc: {
      name: 'West Bengal Human Rights Commission',
      phone: '033-22894100',
      website: 'https://wbhrc.nic.in'
    },
    dlsaPhone: '15100 / 033-22482323'
  },
  {
    state: 'Gujarat',
    pca: {
      name: 'Gujarat Police Complaints Authority',
      phone: '079-23254300',
      email: 'spca-guj@gov.in',
      website: 'https://police.gujarat.gov.in',
      address: 'Police Bhavan, Sector 18, Gandhinagar 382018'
    },
    acb: {
      name: 'Gujarat Anti Corruption Bureau',
      phone: '1064 / 079-22869228',
      website: 'https://acb.gujarat.gov.in'
    },
    shrc: {
      name: 'Gujarat State Human Rights Commission',
      phone: '079-23257852',
      website: 'https://gshrc.gujarat.gov.in'
    },
    dlsaPhone: '15100 / 079-27540200'
  },
  {
    state: 'Telangana',
    pca: {
      name: 'Telangana State Police Complaints Authority',
      phone: '040-27852435',
      email: 'spca-ts@gov.in',
      website: 'https://tspolice.gov.in',
      address: 'DGP Office, Lakdikapool, Hyderabad 500004'
    },
    acb: {
      name: 'Telangana Anti-Corruption Bureau',
      phone: '1064 / 040-23251500',
      website: 'https://acb.telangana.gov.in'
    },
    shrc: {
      name: 'Telangana State Human Rights Commission',
      phone: '040-24600999',
      website: 'https://tsshrc.gov.in'
    },
    dlsaPhone: '15100 / 040-24745678'
  },
  {
    state: 'Kerala',
    pca: {
      name: 'Kerala State Police Complaints Authority',
      phone: '0471-2318990',
      email: 'spca.pol@kerala.gov.in',
      website: 'https://keralapolice.gov.in',
      address: 'VJT Hall Compound, Palayam, Thiruvananthapuram 695034'
    },
    acb: {
      name: 'Vigilance & Anti-Corruption Bureau Kerala',
      phone: '1064 / 0471-2305392',
      website: 'https://vacb.kerala.gov.in'
    },
    shrc: {
      name: 'Kerala State Human Rights Commission',
      phone: '0471-2307263',
      website: 'https://kshrc.kerala.gov.in'
    },
    dlsaPhone: '15100 / 0471-2307390'
  },
  {
    state: 'Rajasthan',
    pca: {
      name: 'Rajasthan Police Complaints Authority',
      phone: '0141-2740700',
      email: 'spca-raj@gov.in',
      website: 'https://police.rajasthan.gov.in',
      address: 'Police HQ, Lalkothi, Jaipur 302015'
    },
    acb: {
      name: 'Anti Corruption Bureau Rajasthan',
      phone: '1064 / 0141-2706600',
      website: 'https://acb.rajasthan.gov.in'
    },
    shrc: {
      name: 'Rajasthan State Human Rights Commission',
      phone: '0141-2227700',
      website: 'https://rshrc.rajasthan.gov.in'
    },
    dlsaPhone: '15100 / 0141-2227844'
  }
];
